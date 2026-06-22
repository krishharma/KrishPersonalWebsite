import { Helmet } from "react-helmet-async";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  PERSON_SCHEMA,
} from "../config/site";

function resolveCanonical(path = "") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function SiteSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noSuffix = false,
}) {
  const pageTitle = title
    ? noSuffix
      ? title
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Researcher, Builder & Student from Las Vegas`;

  const canonical = resolveCanonical(path);
  const ogImage = `${SITE_URL}/og-image.svg`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
    </Helmet>
  );
}
