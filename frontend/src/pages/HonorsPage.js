import { useMemo } from "react";
import HonorCard from "../components/HonorCard";
import SiteSEO from "../components/SiteSEO";
import honorsMenuItems from "../data/honorsMenuItems";
import "./HonorsPage.css";

const CATEGORY_ORDER = [
  "Research & Innovation",
  "Business & Leadership",
  "Speech, Debate & Public Speaking",
];

const HonorsPage = () => {
  const grouped = useMemo(() => {
    const map = new Map(CATEGORY_ORDER.map((category) => [category, []]));

    honorsMenuItems.forEach((award, index) => {
      const list = map.get(award.category) || [];
      list.push({ ...award, key: `${award.category}-${award.title}-${index}` });
      map.set(award.category, list);
    });

    return CATEGORY_ORDER.map((category) => ({
      category,
      awards: map.get(category) || [],
    })).filter((group) => group.awards.length > 0);
  }, []);

  return (
    <div className="page-container page-with-nav honors-page">
      <SiteSEO
        title="Honors & Awards"
        description="National and state-level honors and awards earned by Krish Sharma in research, DECA, FBLA, and speech, debate & public speaking."
        path="/honors"
      />

      <main className="honors-page__main">
        <header className="honors-page__hero">
          <p className="honors-page__eyebrow">Honors</p>
          <h1 className="honors-page__title">Awards</h1>
          <p className="honors-page__intro">
            National championships, state titles, and conference qualifications across
            research, business, and speech.
          </p>
        </header>

        {grouped.map((group) => (
          <section
            key={group.category}
            className="honors-section"
            aria-labelledby={`honors-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <h2
              className="honors-section__title"
              id={`honors-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {group.category}
            </h2>
            <ul className="honors-grid">
              {group.awards.map((award) => (
                <li key={award.key} className="honors-grid__item">
                  <HonorCard award={award} variant="grid" />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
};

export default HonorsPage;
