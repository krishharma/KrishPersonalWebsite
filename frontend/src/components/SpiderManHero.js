import React, { useEffect } from "react";
import MainTitle from "./MainTitle";
import StorySection from "./StorySection";
import SiteSEO from "./SiteSEO";
import "./SpiderManHero.css";
import { initFitTextClass } from "../utils/fitText";

const SpiderManHero = () => {
  useEffect(() => {
    document.body.classList.add("page-loaded");
    const cleanupFit = initFitTextClass({ defaultMin: 24, defaultMax: 220 });
    return () => {
      document.body.classList.remove("page-loaded");
      if (cleanupFit) cleanupFit();
    };
  }, []);

  return (
    <div className="spiderman-hero">
      <SiteSEO path="/" noSuffix />
      <MainTitle />
      <div className="bottom-hero-placeholder" aria-hidden="true" />
      <StorySection />
    </div>
  );
};

export default SpiderManHero;
