import React, { useState } from "react";
import SiteSEO from "../components/SiteSEO";
import "../components/SpiderManHero.css";
import "./ContactPage.css";

const EMAIL = "krishkiaan82@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/krish-sharma-6870b4302";
const SCHOLAR_URL = "https://scholar.google.com/citations?user=d7tyFq8AAAAJ";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-container page-with-nav contact-page">
      <SiteSEO
        title="Contact"
        description="Contact Krish Sharma via email, LinkedIn, or Google Scholar. Reach out about research, projects, or collaboration."
        path="/contact"
      />

      <header className="contact-page__header">
        <p className="contact-page__eyebrow">Contact</p>
        <h1 className="contact-page__title">Get in touch</h1>
        <p className="contact-page__intro">
          Send a message or reach out directly. I&apos;ll get back to you as soon as I can.
        </p>
      </header>

      <div className="contact-page__layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              className="contact-form__input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              className="contact-form__input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              className="contact-form__textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-form__submit">
            Send
          </button>
        </form>

        <aside className="contact-aside">
          <div className="contact-aside__block">
            <p className="contact-aside__label">Email</p>
            <a className="contact-aside__email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>

          <div className="contact-aside__block">
            <p className="contact-aside__label">Connect</p>
            <div className="contact-aside__socials">
              <a
                className="contact-social-button contact-social-button--linkedin"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <svg
                  className="contact-social-button__icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                className="contact-social-button contact-social-button--scholar"
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar profile"
              >
                <img
                  className="contact-social-button__icon contact-social-button__icon--scholar"
                  src="/google-scholar-icon.png"
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
