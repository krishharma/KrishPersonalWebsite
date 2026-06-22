// Update REACT_APP_SITE_URL in .env when your domain goes live (e.g. https://krishsharmalv.com)
export const SITE_URL = process.env.REACT_APP_SITE_URL || "https://krishsharmalv.com";

export const SITE_NAME = "Krish Sharma";

export const DEFAULT_DESCRIPTION =
  "Official portfolio of Krish Sharma, a high school researcher and builder from Las Vegas. AI research at UNLV DataX Lab and Brookings Mountain West, projects, awards, and contact.";

export const LINKEDIN_URL = "https://www.linkedin.com/in/krish-sharma-6870b4302";
export const SCHOLAR_URL = "https://scholar.google.com/citations?user=d7tyFq8AAAAJ";
export const EMAIL = "krishkiaan82@gmail.com";

export const SITE_ROUTES = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/research",
  "/honors",
  "/contact",
];

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krish Sharma",
  url: SITE_URL,
  email: EMAIL,
  jobTitle: "Student & Researcher",
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Nevada, Las Vegas" },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Research",
    "Software Engineering",
    "Data Science",
  ],
  sameAs: [LINKEDIN_URL, SCHOLAR_URL],
};
