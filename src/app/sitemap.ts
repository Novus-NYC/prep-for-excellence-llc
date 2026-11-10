import type { MetadataRoute } from "next";
import { routes, site } from "@/lib/site";

// No lastModified: a build-time stamp would claim every page changed on
// every deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(routes).map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
  }));
}
