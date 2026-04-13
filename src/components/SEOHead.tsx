import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_TITLE = "Venkateshwar D R | Full Stack Developer";
const BASE_DESC =
  "Dedicated and forward-thinking Full-Stack Developer driving teams towards delivering on aspirational tech visions.";
const SITE_URL = "https://venkateshwar.dev";

export default function SEOHead({
  title,
  description = BASE_DESC,
  path = "/",
}: SEOHeadProps) {
  const pageTitle = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Venkateshwar D R Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
