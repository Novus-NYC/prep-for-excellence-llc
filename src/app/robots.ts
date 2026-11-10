import type { MetadataRoute } from "next";
import { site, siteUrlIsSet } from "@/lib/site";

// The sitemap line needs the real address, so it is left out until one is set.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrlIsSet ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}
