import type { Metadata } from "next";
import { site } from "./site";

type OgImage = { url: string; width: number; height: number; alt: string };

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: OgImage;
  // Set on the home page so the title is not suffixed with the site name.
  absoluteTitle?: boolean;
};

export const defaultOgImage: OgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name}. ${site.positioning.join(" ")}`,
};

// Gives every route its own canonical URL, og:url, title, description and
// image. Without it each page would inherit og:url "/" from the root layout.
export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
