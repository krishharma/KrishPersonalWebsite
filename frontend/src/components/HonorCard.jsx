import "./HonorCard.css";

function parseAwardMeta(description = "") {
  const parts = description.split(" · ");
  const context = parts.length > 1 ? parts.slice(1).join(" · ") : "";
  const year = parts[0]?.trim() || "";

  return {
    year,
    context: context || description,
  };
}

function logoInitial(title = "") {
  return title.trim().charAt(0).toUpperCase() || "·";
}

const LEVEL_LABELS = {
  state: "State",
  regional: "Regional",
  national: "National",
  international: "International",
};

function isHighlightTier(level = "") {
  return level === "national" || level === "international";
}

export default function HonorCard({ award, className = "", variant = "inline" }) {
  const { year, context } = parseAwardMeta(award.description);
  const level = award.level || "";
  const tier = isHighlightTier(level) ? "honor-card--tier-high" : "";
  const isGrid = variant === "grid";
  const levelLabel = LEVEL_LABELS[level];

  return (
    <article
      className={`honor-card${isGrid ? " honor-card--grid" : ""} ${tier} ${className}`.trim()}
    >
      {levelLabel && (
        <span
          className={`honor-card__stamp honor-card__stamp--${level}`}
          aria-label={`${levelLabel} level`}
        >
          {levelLabel}
        </span>
      )}

      <div className="honor-card__seal" aria-hidden="true">
        {award.logo ? (
          <img
            src={award.logo}
            alt={award.logoAlt || ""}
            loading="lazy"
            className={award.logoWide ? "honor-card__logo--wide" : undefined}
          />
        ) : (
          <span>{logoInitial(award.title)}</span>
        )}
      </div>

      <div className="honor-card__body">
        <h3 className="honor-card__title">{award.title}</h3>
        {(year || context) && (
          <p className="honor-card__meta">
            {year && <time className="honor-card__year">{year}</time>}
            {context && <span className="honor-card__context">{context}</span>}
          </p>
        )}
      </div>
    </article>
  );
}
