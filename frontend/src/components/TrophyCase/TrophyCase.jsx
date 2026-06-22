import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TrophyCase.css";

const CATEGORY_ORDER = [
  "Research & Innovation",
  "Business & Leadership",
  "Speech & Debate",
];

function groupByCategory(awards) {
  const groups = new Map(CATEGORY_ORDER.map((cat) => [cat, []]));
  awards.forEach((award, index) => {
    const list = groups.get(award.category) || [];
    list.push({ ...award, id: `${award.category}-${index}` });
    groups.set(award.category, list);
  });
  return CATEGORY_ORDER.map((category) => ({
    category,
    awards: groups.get(category) || [],
  })).filter((shelf) => shelf.awards.length > 0);
}

function TrophyItem({ award, index, isActive, onSelect, onHover }) {
  return (
    <motion.button
      type="button"
      className={`trophy-item ${isActive ? "trophy-item--active" : ""}`}
      onClick={() => onSelect(award)}
      onMouseEnter={() => onHover(award.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(award.id)}
      onBlur={() => onHover(null)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`${award.title}. ${award.description}`}
    >
      <span className="trophy-item__pedestal" aria-hidden="true">
        <span className="trophy-item__cup">
          {award.logo ? (
            <img className="trophy-item__logo" src={award.logo} alt="" />
          ) : (
            <span className="trophy-item__fallback">★</span>
          )}
        </span>
        <span className="trophy-item__base" />
        <span className="trophy-item__plinth" />
      </span>
      <span className="trophy-item__title">{award.title}</span>
      {award.discLabel && (
        <span className="trophy-item__badge">{award.discLabel}</span>
      )}
    </motion.button>
  );
}

export default function TrophyCase({ awards, onSelect }) {
  const shelves = useMemo(() => groupByCategory(awards), [awards]);
  const [hoveredId, setHoveredId] = useState(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });

  const handleCaseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  return (
    <div className="trophy-case-wrap">
      <header className="trophy-case-header">
        <p className="trophy-case-header__eyebrow">Recognition</p>
        <h1 className="trophy-case-header__title">Honors &amp; Awards</h1>
        <p className="trophy-case-header__subtitle">
          Hover a trophy to spotlight it · Click for details
        </p>
      </header>

      <motion.div
        className="trophy-case"
        onMouseMove={handleCaseMove}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="trophy-case__spotlight"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 248, 220, 0.55) 0%, transparent 42%)`,
          }}
          aria-hidden="true"
        />

        <div className="trophy-case__frame trophy-case__frame--top" aria-hidden="true" />
        <div className="trophy-case__frame trophy-case__frame--left" aria-hidden="true" />
        <div className="trophy-case__frame trophy-case__frame--right" aria-hidden="true" />
        <div className="trophy-case__glass" aria-hidden="true" />

        <div className="trophy-case__interior">
          {shelves.map((shelf, shelfIndex) => (
            <section key={shelf.category} className="trophy-shelf">
              <div className="trophy-shelf__rail" aria-hidden="true" />
              <p className="trophy-shelf__label">{shelf.category}</p>
              <div className="trophy-shelf__row">
                {shelf.awards.map((award, index) => (
                  <TrophyItem
                    key={award.id}
                    award={award}
                    index={shelfIndex * 4 + index}
                    isActive={hoveredId === award.id}
                    onSelect={onSelect}
                    onHover={setHoveredId}
                  />
                ))}
              </div>
              <div className="trophy-shelf__board" aria-hidden="true" />
            </section>
          ))}
        </div>

        <div className="trophy-case__base" aria-hidden="true" />
      </motion.div>
    </div>
  );
}

export function AwardDetailModal({ award, onClose }) {
  return (
    <AnimatePresence>
      {award && (
        <motion.div
          className="award-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={award.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="award-modal"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="award-modal__close" onClick={onClose} aria-label="Close">
              ×
            </button>
            <p className="award-modal__category">{award.category}</p>
            {award.logo && (
              <img className="award-modal__logo" src={award.logo} alt="" aria-hidden="true" />
            )}
            <h2 className="award-modal__title">{award.title}</h2>
            <p className="award-modal__meta">{award.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
