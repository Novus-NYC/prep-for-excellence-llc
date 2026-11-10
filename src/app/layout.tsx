import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/public-sans/wght.css";
import "./globals.css";
import RevealObserver from "@/components/reveal-observer";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { defaultOgImage } from "@/lib/metadata";
import { site } from "@/lib/site";

const description = `${site.name} teaches students how to make college work for them: ${site.tagline.toLowerCase()}. ${site.doe.status}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: site.name,
    description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
    images: [defaultOgImage.url],
  },
};

const revealBootScript =
  "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady){document.documentElement.classList.remove('js')}},4000)";

export const viewport: Viewport = {
  themeColor: "#4B2A86",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // data-scroll-behavior pairs with the smooth scrolling set in globals.css.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Marks the document as scripted before first paint. Scroll reveal
            hidden states only apply under html.js. If the reveal script has
            not started after four seconds (a failed bundle, for example) the
            class comes off again so nothing stays hidden. */}
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-purple"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
