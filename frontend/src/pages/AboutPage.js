import React from "react";
import SiteSEO from "../components/SiteSEO";
import "../components/SpiderManHero.css";
import "./AboutPage.css";

const BREAKDANCE_VIDEO_ID = "tMlnVvr2dHs";

const BREAKDANCE_PHOTOS = [
  {
    src: "/about/zoo-agt-crew.png",
    alt: "The Zoo dance crew posing on the America's Got Talent stage",
  },
  {
    src: "/about/zoo-agt-portrait.png",
    alt: "Krish Sharma with The Zoo on the America's Got Talent stage",
    caption: "America's Got Talent · 2023",
  },
  {
    src: "/about/zoo-agt-stage.png",
    alt: "The Zoo performing on the America's Got Talent stage",
  },
];

const SPEAKING_PHOTOS = [
  {
    src: "/about/tedx-lva-youth.png",
    alt: "Krish Sharma giving a TEDx talk at LVA Youth",
    caption: "TEDx LVA Youth · Starting Before You're Ready",
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
      </header>

      <div className="about-page__content">
        <div className="about-page__intro">
          <p className="about-page__text">Hi, I&apos;m Krish.</p>
          <p className="about-page__text">
            I&apos;m from Las Vegas and have spent my High School years at Ed W. Clark High School.
            Vaguely speaking, I enjoy building things, whether it&apos;s a piece of software, a
            research project, or an idea that starts from a simple conversation with friends.
          </p>
          <p className="about-page__text">
            A lot of my interests sit at the intersection of technology, business, and
            problem-solving. I&apos;m especially fascinated by building under constraints, whether
            that&apos;s limited compute, limited data, or limited time, and figuring out how to make
            something work anyway. That&apos;s led me into everything from neuromorphic research and
            engineering projects to investing and teaching financial literacy.
          </p>
          <p className="about-page__text">
            That covers most of the building side of me. The two other parts that shaped me just
            as much are breakdancing and speaking.
          </p>
        </div>

        <section className="about-page__section">
          <h2 className="about-page__section-title">Dance</h2>
          <p className="about-page__text">
            I&apos;ve been breakdancing for 8 years with a Las Vegas breakdancing crew called The
            Zoo (Zoologic Empire). I&apos;ve broken with them everywhere from local cyphers to
            America&apos;s Got Talent. I love the people and the culture. Every break session somehow
            manages to bring together b-boys from all walks of life who all speak the same language
            on the floor.
          </p>
          <p className="about-page__text">
            My personal preference when I break is old-school music. If you want me locked in, put on
            A Tribe Called Quest and step back. That music has a way of helping my footwork make
            sense.
          </p>
          <p className="about-page__text">
            America&apos;s Got Talent was surreal for many reasons, but yes, I did get to talk to Terry
            Crews backstage. He was as enthusiastic as you&apos;d hope. I still think about that
            conversation more than I probably should.
          </p>
          <p className="about-page__text">
            I also try to give back what I received when I started. As a young dancer, older b-boys
            pulled me into the circle when I had no business being there, so I spend a lot of time
            helping newer and younger dancers find their footing. Same energy as debugging code with
            a friend at midnight, honestly.
          </p>
          <p className="about-page__text">
            What I love most about dance isn&apos;t actually performing. It&apos;s the process. You can spend
            hours on a move that isn&apos;t quite right, tweaking and trying again until it finally
            works. I think that&apos;s also why I enjoy engineering and building projects. Whether
            it&apos;s a new combo or a research project, there&apos;s satisfaction in solving things step
            by step.
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
                {photo.caption && (
                  <figcaption className="about-page__figure-caption">{photo.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

        <section className="about-page__section">
          <h2 className="about-page__section-title">Speaking</h2>
          <p className="about-page__text">
            I love being on stage. Debate, research conferences, TEDx, and random talks I most likely
            signed up for. As long as there&apos;s a crowd that&apos;s somewhat bewildered and a microphone
            in hand, I&apos;m in.
          </p>
          <p className="about-page__text">
            For TEDx LVA Youth I gave a talk titled &ldquo;Starting Before You&apos;re Ready: The Freestyle
            Mindset.&rdquo; In short, it&apos;s my breakdance origin story wrapped up as life advice. The key
            takeaway is confidence shows up the moment you start, not before. I did say the word
            &ldquo;cypher&rdquo; on a TEDx stage. No regrets.
          </p>
          <p className="about-page__text">
            My favorite part of presenting is seeing the light come on in someone&apos;s eyes when a
            complex idea finally clicks. That high is part of why I present research, part of why I
            do speech and debate, and largely why I co-founded Wall Street Warriors through the
            Dragon Kim Fellowship to teach middle schoolers financial literacy. Explaining something
            difficult in a way that actually connects feels like a superpower.
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
                {photo.caption && (
                  <figcaption className="about-page__figure-caption">{photo.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
