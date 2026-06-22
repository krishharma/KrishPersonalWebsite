import React from "react";
import SiteSEO from "../components/SiteSEO";
import { EXPERIENCES } from "../data/experienceData";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  return (
    <div className="page-container page-with-nav experience-page">
      <SiteSEO
        title="Experience"
        description="Work experience and research roles of Krish Sharma at UNLV DataX Lab, Brookings Mountain West, and more."
        path="/experience"
      />
      <main className="experience-page__main">
        <header className="experience-page__hero">
          <p className="experience-page__eyebrow">Experience</p>
          <h1 className="experience-page__title">Where I&apos;ve worked</h1>
        </header>

        <div className="experience-list">
          {EXPERIENCES.map((role) => (
            <article key={role.id} className="experience-card" id={role.id}>
              <div className="experience-card__logo-wrap">
                <img
                  src={role.logo}
                  alt={role.logoAlt}
                  className="experience-card__logo"
                  loading="lazy"
                />
              </div>

              <div className="experience-card__body">
                <header className="experience-card__header">
                  <div>
                    <p className="experience-card__org">{role.org}</p>
                    <h2 className="experience-card__title">{role.title}</h2>
                  </div>
                  <time className="experience-card__dates">{role.dates}</time>
                </header>

                <p className="experience-card__hook">{role.hook}</p>

                <ul className="experience-card__highlights">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {role.legislation && (
                  <ul className="experience-card__bills" aria-label="Legislation drafted">
                    {role.legislation.map((bill) => (
                      <li key={bill}>{bill}</li>
                    ))}
                  </ul>
                )}

                <div className="experience-card__footer">
                  {role.metric && (
                    <span className="experience-card__metric">
                      <strong>{role.metric.value}</strong> {role.metric.label}
                    </span>
                  )}
                  <ul className="experience-card__tags" aria-label="Focus areas">
                    {role.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;
