import SiteSEO from "../components/SiteSEO";
import { RESEARCH } from "../data/researchData";
import "./ResearchPage.css";

const STATUS_CLASS = {
  ongoing: "research-section__status--ongoing",
  accepted: "research-section__status--accepted",
  published: "research-section__status--published",
};

function ResearchSection({ paper }) {
  return (
    <section
      className="research-section"
      id={paper.id}
      aria-labelledby={`heading-${paper.id}`}
    >
      <header className="research-section__header">
        <div className="research-section__heading">
          {paper.logo ? (
            <div className="research-section__logo">
              <img src={paper.logo} alt={paper.logoAlt || ""} loading="lazy" />
            </div>
          ) : (
            <div className="research-section__logo research-section__logo--index">
              <span>{paper.index}</span>
            </div>
          )}
          <div className="research-section__titles">
            <h2 className="research-section__title" id={`heading-${paper.id}`}>
              {paper.title}
            </h2>
            <p className="research-section__venue">
              {paper.venueUrl ? (
                <a href={paper.venueUrl} target="_blank" rel="noopener noreferrer">
                  {paper.venue}
                </a>
              ) : (
                paper.venue
              )}
              <span className="research-section__year"> · {paper.year}</span>
            </p>
          </div>
        </div>
        <span className={`research-section__status ${STATUS_CLASS[paper.status] || ""}`}>
          {paper.statusLabel}
        </span>
      </header>

      {paper.mentor && (
        <p className="research-section__mentor">with {paper.mentor}</p>
      )}

      <p className="research-section__summary">{paper.description}</p>

      {paper.highlights?.length > 0 && (
        <ul className="research-section__list">
          {paper.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <footer className="research-section__footer">
        {paper.tags?.length > 0 && (
          <ul className="research-section__tags" aria-label="Focus areas">
            {paper.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        {paper.labLink && (
          <a
            className="research-section__link"
            href={paper.labLink.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {paper.labLink.label} →
          </a>
        )}
      </footer>
    </section>
  );
}

const ResearchPage = () => {
  return (
    <div className="page-container page-with-nav research-page">
      <SiteSEO
        title="Research"
        description="Research papers and lab work by Krish Sharma, focusing on graph neural networks, AI, healthcare, and policy at UNLV and Brookings."
        path="/research"
      />

      <article className="research-article">
        <header className="research-article__header">
          <p className="research-article__eyebrow">Krish Sharma</p>
          <h1 className="research-article__title">Research</h1>
          <p className="research-article__dek">
            Conference manuscripts, bioinformatics pipelines, and policy writing from
            UNLV labs and Brookings Mountain West.
          </p>
        </header>

        <div className="research-article__body">
          {RESEARCH.map((paper) => (
            <ResearchSection key={paper.id} paper={paper} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default ResearchPage;
