import React from "react";
import SiteSEO from "../components/SiteSEO";
import "../components/SpiderManHero.css";
import "./AboutPage.css";

const BREAKDANCE_VIDEO_ID = "tMlnVvr2dHs";

const BREAKDANCE_PHOTOS = [
  {
    src: "/about/zoo-agt-crew.png",
    alt: "The Zoo dance crew posing on the America's Got Talent stage",
    caption: "The Zoo · AGT",
  },
  {
    src: "/about/zoo-agt-portrait.png",
    alt: "Krish Sharma with The Zoo on the America's Got Talent stage",
    caption: "America's Got Talent",
  },
  {
    src: "/about/zoo-agt-stage.png",
    alt: "The Zoo performing on the America's Got Talent stage",
    caption: "AGT Performance",
  },
];

const SPEAKING_PHOTOS = [
  {
    src: "/about/tedx-lva-youth.png",
    alt: "Krish Sharma giving a TEDx talk at LVA Youth",
    caption: "TEDx LVA Youth",
  },
  {
    src: "/about/pan-pacific-talk.png",
    alt: "Krish Sharma presenting research at Pan Pacific Vancouver",
    caption: "Pan Pacific Vancouver",
  },
];

const AboutPage = () => {
  return (
    <div className="page-container page-with-nav about-page">
      <SiteSEO
        title="About"
        description="About Krish Sharma, a student from Las Vegas building at the intersection of technology, business, research, and entrepreneurship."
        path="/about"
      />
      <header className="about-page__header">
        <p className="about-page__eyebrow">About</p>
        <h1 className="about-page__title">Krish Sharma</h1>
        <p className="about-page__subtitle">Nice to meet you</p>
      </header>

      <div className="about-page__content">
        <div className="about-page__intro">
          <p className="about-page__text">Hi, I&apos;m Krish.</p>
          <p className="about-page__text">
            I&apos;m a student from Las Vegas who likes building things, whether that&apos;s a piece
            of software, a research project, or an idea that starts as a note on my phone and
            somehow turns into months of work.
          </p>
          <p className="about-page__text">
            A lot of my interests sit at the intersection of technology, business, and
            problem-solving. I&apos;m fascinated by how people make decisions, how systems work,
            and how a good idea becomes something real. That&apos;s led me into everything from
            engineering projects and AI research to investing, entrepreneurship, and teaching
            financial literacy.
          </p>
          <p className="about-page__text">
            Most of my projects begin with me thinking, &ldquo;this can&apos;t be that hard,&rdquo;
            which has turned out to be wrong more often than I&apos;d like to admit.
          </p>
        </div>

        <section className="about-page__section">
          <h2 className="about-page__section-title">Dance</h2>
          <p className="about-page__text">
            I&apos;ve been breakdancing for years with The Zoo, a Las Vegas crew that&apos;s performed
            on stages ranging from local showcases to America&apos;s Got Talent.
          </p>
          <p className="about-page__text">
            What I love most about dance isn&apos;t actually performing. It&apos;s the process. You spend
            hours practicing a move that doesn&apos;t work, making small adjustments, and trying
            again until something finally clicks. Looking back, that&apos;s probably why I enjoy
            engineering and building projects so much. Whether it&apos;s learning a new move or
            debugging code at midnight, the satisfaction comes from figuring things out one step
            at a time.
          </p>

          <div className="about-page__video">
            <iframe
              className="about-page__video-embed"
              src={`https://www.youtube.com/embed/${BREAKDANCE_VIDEO_ID}`}
              title="The Zoo breakdancing performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="about-page__photo-grid about-page__photo-grid--three">
            {BREAKDANCE_PHOTOS.map((photo) => (
              <figure key={photo.src} className="about-page__figure">
                <img
                  className="about-page__figure-image"
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
                <figcaption className="about-page__figure-caption">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="about-page__section">
          <h2 className="about-page__section-title">Speaking</h2>
          <p className="about-page__text">
            I&apos;m also someone who genuinely enjoys speaking in front of people. Whether it&apos;s a
            TEDx talk, a research presentation, or a competitive event, I like taking a
            complicated idea and making it understandable.
          </p>
          <p className="about-page__text">
            There&apos;s something rewarding about seeing someone become interested in a topic they
            didn&apos;t care about five minutes earlier. That same idea is part of why I enjoy
            mentoring younger students and teaching financial literacy. Learning something is
            great. Helping someone else understand it is even better.
          </p>

          <div className="about-page__photo-grid">
            {SPEAKING_PHOTOS.map((photo) => (
              <figure key={photo.src} className="about-page__figure">
                <img
                  className="about-page__figure-image"
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
                <figcaption className="about-page__figure-caption">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
