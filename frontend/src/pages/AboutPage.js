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
        <p className="about-page__subtitle">
          Building at the intersection of research, engineering, and ideas that start on my phone
        </p>
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
            neuromorphic research and engineering projects to investing, entrepreneurship, and
            teaching financial literacy through my Dragon Kim fellowship.
          </p>
          <p className="about-page__text">
            Most of my projects begin with me thinking, &ldquo;this can&apos;t be that hard,&rdquo;
            which has turned out to be wrong more often than I&apos;d like to admit.
          </p>
        </div>

        <section className="about-page__section">
          <h2 className="about-page__section-title">Dance</h2>
          <p className="about-page__text">
            I&apos;ve been breakdancing for 8 years with The Zoo (Zoologic Empire), a Las Vegas crew
            that&apos;s taken me everywhere from local cyphers to America&apos;s Got Talent. I love the
            culture, the people, and the fact that every session introduces you to b-boys from
            completely different backgrounds who somehow all speak the same language on the floor.
          </p>
          <p className="about-page__text">
            I&apos;m especially into old-school music when I break. If you ever need me locked in,
            put on A Tribe Called Quest and step back. Something about that sound just makes my
            footwork make sense.
          </p>
          <p className="about-page__text">
            AGT was surreal for a lot of reasons, but yes, I did get to talk to Terry Crews backstage.
            He was exactly as enthusiastic as you&apos;d hope. I still think about that conversation
            more than I probably should.
          </p>
          <p className="about-page__text">
            I also try to pay forward what I got when I started. Older b-boys pulled me into the
            circle when I was a wide-eyed kid who had no business being there, so I spend a lot of
            time helping newer and younger dancers find their footing. Same energy as debugging
            code with a friend at midnight, honestly.
          </p>
          <p className="about-page__text">
            What I love most about dance isn&apos;t actually performing. It&apos;s the process. You spend
            hours on a move that doesn&apos;t work, tweak it, and try again until something clicks.
            That&apos;s probably why I enjoy engineering and building projects so much. Whether it&apos;s
            a new combo or a research idea, the satisfaction comes from figuring things out one
            step at a time.
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
            I genuinely love being on a stage. TEDx, research conferences, debate rounds, random
            presentations I probably volunteered for. If there&apos;s a microphone and a crowd that
            looks slightly confused, I&apos;m interested.
          </p>
          <p className="about-page__text">
            At TEDx LVA Youth, I gave a talk called &ldquo;Starting Before You&apos;re Ready: The Freestyle
            Mindset,&rdquo; which is basically my breakdance origin story dressed up as life advice.
            The whole point: confidence shows up after you step in, not before. I may have used the
            word &ldquo;cypher&rdquo; on a TEDx stage. No regrets.
          </p>
          <p className="about-page__text">
            My favorite part of speaking is watching someone&apos;s face change when a complicated idea
            finally clicks. That rush is half the reason I do research presentations, half the reason
            I competed in speech and debate, and basically the whole reason I co-founded Wall Street
            Warriors through the Dragon Kim Fellowship to teach middle schoolers financial literacy.
            Explaining something hard in a way that actually lands feels like a superpower.
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
