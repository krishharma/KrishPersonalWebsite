import React, { useEffect, useRef } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./PageTransition.css";

const ROUTE_ORDER = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/research",
  "/honors",
  "/contact",
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.6,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0.6,
  }),
};

const instantVariants = {
  enter: { x: 0, opacity: 1 },
  center: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 1 },
};

const PageTransition = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const prevPathRef = useRef(location.pathname);
  const directionRef = useRef(1);

  if (prevPathRef.current !== location.pathname) {
    const prevIndex = ROUTE_ORDER.indexOf(prevPathRef.current);
    const nextIndex = ROUTE_ORDER.indexOf(location.pathname);
    const safePrev = prevIndex === -1 ? nextIndex : prevIndex;
    const safeNext = nextIndex === -1 ? safePrev : nextIndex;
    directionRef.current = safeNext >= safePrev ? 1 : -1;
    prevPathRef.current = location.pathname;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const variants = prefersReducedMotion ? instantVariants : slideVariants;
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.4, 0, 0.2, 1] };

  return (
    <div className="page-transition-viewport">
      <AnimatePresence mode="sync" initial={false} custom={directionRef.current}>
        <motion.div
          key={location.pathname}
          className="page-transition-panel"
          custom={directionRef.current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
