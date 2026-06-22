import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SiteSEO from "../components/SiteSEO";
import projects from "../data/projects";
import "./ProjectsPage.css";

function getYoutubeEmbedUrl({ youtubeId, start = 0 }) {
  const params = new URLSearchParams();
  if (start > 0) params.set("start", String(start));
  const query = params.toString();
  return `https://www.youtube.com/embed/${youtubeId}${query ? `?${query}` : ""}`;
}

function getImageSources(src) {
  if (src.endsWith(".webp")) {
    return { webp: src, fallback: src.replace(".webp", ".png") };
  }
  return { webp: null, fallback: src };
}

function ProjectImage({ image, className, preview = false }) {
  const { webp, fallback } = getImageSources(image.src);

  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img
        src={fallback}
        alt={image.alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

function ImageLightbox({ image, onClose }) {
  const { webp, fallback } = getImageSources(image.src);
  const lightboxRef = useRef(null);

  useEffect(() => {
    const node = lightboxRef.current;
    if (node) node.scrollTop = 0;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={lightboxRef}
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="project-lightbox__close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className="project-lightbox__content" onClick={(e) => e.stopPropagation()}>
        <picture>
          {webp && <source srcSet={webp} type="image/webp" />}
          <img src={fallback} alt={image.alt} className="project-lightbox__img" />
        </picture>
      </div>
    </div>,
    document.body
  );
}

function ExpandableImage({ image }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        className="medium-section__expandable"
        onClick={() => setOpen(true)}
        aria-label={`View full size: ${image.alt}`}
      >
        <ProjectImage image={image} className="medium-section__figure" />
        <span className="medium-section__expand-hint">Click to enlarge</span>
      </button>
      {open && <ImageLightbox image={image} onClose={close} />}
    </>
  );
}

function ProjectAsideMedia({ project }) {
  if (project.video) {
    return (
      <figure className="medium-section__aside-figure">
        <div className="medium-section__video-wrap">
          <iframe
            src={getYoutubeEmbedUrl(project.video)}
            title={project.video.title}
            className="medium-section__video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        {project.figureCaption && (
          <figcaption className="medium-section__caption">{project.figureCaption}</figcaption>
        )}
      </figure>
    );
  }

  const image =
    project.asideImage || (project.images?.length === 1 ? project.images[0] : null);
  if (!image) return null;

  const caption = project.asideCaption || project.figureCaption;

  return (
    <figure className="medium-section__aside-figure">
      <ProjectImage image={image} className="medium-section__figure" />
      {caption && <figcaption className="medium-section__caption">{caption}</figcaption>}
    </figure>
  );
}

function ProjectFigureItem({ image, caption }) {
  const content = image.expandable ? (
    <ExpandableImage image={image} />
  ) : (
    <ProjectImage image={image} className="medium-section__figure" />
  );

  if (!caption) return content;

  return (
    <figure className="medium-section__figure-item">
      {content}
      <figcaption className="medium-section__caption">{caption}</figcaption>
    </figure>
  );
}

function ProjectFigures({ project }) {
  if (!project.images?.length) return null;

  return (
    <figure className="medium-section__figures">
      <div
        className={`medium-section__figure-grid ${
          project.images.length === 1 ? "medium-section__figure-grid--single" : ""
        }`}
      >
        {project.images.map((img) => (
          <ProjectFigureItem key={img.src} image={img} />
        ))}
      </div>
      {project.figureCaption && (
        <figcaption className="medium-section__caption medium-section__caption--block">
          {project.figureCaption}
        </figcaption>
      )}
    </figure>
  );
}

function ProjectMediaDuo({ project }) {
  const poster = project.images?.[0];
  if (!project.asideImage || !poster) return null;

  return (
    <div className="medium-section__media-duo">
      <div className="medium-section__media-column">
        <ProjectFigureItem image={project.asideImage} caption={project.asideCaption} />
        {project.bullets?.length > 0 && (
          <ul className="medium-section__list medium-section__list--in-column">
            {project.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <ProjectFigureItem image={poster} caption={project.figureCaption} />
    </div>
  );
}

function hasAsideLayout(project) {
  return (
    project.imageLayout === "aside" &&
    (project.video || project.asideImage || project.images?.length === 1)
  );
}

function hasPosterGrid(project) {
  return Boolean(project.asideImage && project.images?.length > 0);
}

const ProjectsPage = () => {
  return (
    <div className="page-container page-with-nav projects-page">
      <SiteSEO
        title="Projects"
        description="Software and research projects by Krish Sharma, featuring AI tools, health apps, and fellowship work."
        path="/projects"
      />
      <article className="medium-article">
        <header className="medium-article__header">
          <p className="medium-article__author">Krish Sharma</p>
          <h1 className="medium-article__title">Projects I&apos;ve built</h1>
          <p className="medium-article__dek">
            Research tools, a health app, and a fellowship project, written straight without a pitch deck.
          </p>
        </header>

        <div className="medium-article__body">
          {projects.map((project) => {
            const isAside = hasAsideLayout(project);

            return (
              <section
                key={project.id}
                id={project.id}
                className={`medium-section ${isAside ? "medium-section--aside" : ""}`}
                aria-labelledby={`heading-${project.id}`}
              >
                <h2 className="medium-section__title" id={`heading-${project.id}`}>
                  {project.title}
                </h2>
                <p className="medium-section__label">
                  {project.domain} · {project.year}
                </p>

                {isAside ? (
                  <>
                    {hasPosterGrid(project) ? (
                      <>
                        <div className="medium-section__intro">
                          {project.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="medium-section__paragraph">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <ProjectMediaDuo project={project} />
                      </>
                    ) : (
                      <div
                        className={`medium-section__split ${
                          project.video ? "medium-section__split--video" : ""
                        }`}
                      >
                        <div className="medium-section__copy">
                          {project.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="medium-section__paragraph">
                              {paragraph}
                            </p>
                          ))}
                          <ul className="medium-section__list">
                            {project.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <ProjectAsideMedia project={project} />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {project.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="medium-section__paragraph">
                        {paragraph}
                      </p>
                    ))}
                    <ProjectFigures project={project} />
                    <ul className="medium-section__list">
                      {project.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default ProjectsPage;
