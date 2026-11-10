// Single source of truth for business facts. Every value here traces to the
// client's published material (see BUILD_NOTES.md). Anything the client has
// not published is null, and the UI that would show it hides itself.

// The public address of the site: NEXT_PUBLIC_SITE_URL when it is set,
// otherwise the production domain Vercel gives the project. With neither
// there is no real address, so `site.url` falls back to localhost (never a
// plausible looking domain) and `siteUrlIsSet` tells the structured data and
// robots.txt to leave the address out.
const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");

export const siteUrlIsSet = configuredUrl !== "";

export type SocialLink = {
  label: string;
  handle: string;
  url: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  url: string;
  email: string;
  phone: string | null;
  address: string | null;
  hours: string | null;
  serviceArea: string | null;
  pricing: string | null;
  founder: {
    name: string;
    firstName: string;
    role: string;
    quote: string;
    summary: string;
    bio: string[];
    credentials: string[];
    scholarships: { lead: string; figure: string; rest: string };
    graduation: { figure: string; rest: string };
  };
  positioning: readonly [string, string];
  tagline: string;
  promise: string;
  counselorLine: readonly [string, string];
  invitation: string;
  instagramSummary: string;
  stat: {
    lead: string;
    figure: string;
    rest: string;
  };
  doe: {
    status: string;
    vendorId: string;
    mwbe: string;
  };
  socials: {
    instagram: SocialLink;
    tiktok: SocialLink;
    youtube: SocialLink | null;
  };
  logo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const site: SiteConfig = {
  name: "Prep For Excellence",
  legalName: "Prep For Excellence LLC",
  url: (configuredUrl || "http://localhost:3000").replace(/\/$/, ""),
  email: "prep4excellence@gmail.com",
  phone: null,
  address: null,
  hours: null,
  serviceArea: null,
  pricing: null,
  founder: {
    name: "Shawnia Yon",
    firstName: "Shawnia",
    role: "Founder",
    quote: "I’ve been where your students are, and I know what it takes to win.",
    // The bio below restates the founder bio on the client's current site in
    // new sentences. Same facts, nothing added.
    summary:
      "A New York City public school graduate who earned over $80,000 in scholarships and graduated debt-free.",
    bio: [
      "Shawnia Yon is the founder of Prep For Excellence. She is a New York City public school graduate and a Connecticut College alumna, and she graduated debt-free after earning over $80,000 in scholarships.",
      "She has worked in college admissions, career development and mentorship. Today she partners with schools and organizations to close the college readiness gap for students.",
      "Alongside her business, Shawnia is a professional dancer and serves on Connecticut College’s Board of Trustees.",
    ],
    credentials: [
      "NYC public school graduate",
      "Connecticut College alumna",
      "Professional dancer",
      "Connecticut College Board of Trustees",
    ],
    scholarships: { lead: "Over", figure: "$80,000", rest: "in scholarships earned" },
    graduation: { figure: "Debt-free", rest: "at graduation" },
  },
  positioning: ["Not your college counselor.", "Your opportunity strategist."],
  tagline: "Scholarships, College Readiness & Retention & Performing Arts",
  promise: "We teach students how to make college work for them.",
  counselorLine: [
    "We don’t replace your counselor.",
    "We give students the tools to go further.",
  ],
  invitation: "Bring Prep For Excellence to your school & family.",
  instagramSummary: "Workshops & 1:1 sessions",
  stat: {
    lead: "Over",
    figure: "$335,000",
    rest: "in scholarships secured for students",
  },
  doe: {
    status: "NYC DOE Vendor",
    vendorId: "PRE305254",
    mwbe: "MWBE certification pending",
  },
  socials: {
    instagram: {
      label: "Instagram",
      handle: "@prepforexcellencellc",
      url: "https://www.instagram.com/prepforexcellencellc/",
    },
    tiktok: {
      label: "TikTok",
      handle: "@prepforexcellencellc",
      url: "https://www.tiktok.com/@prepforexcellencellc",
    },
    // The Linktree lists a YouTube channel but its URL could not be read.
    youtube: null,
  },
  logo: {
    src: "/images/logo.png",
    width: 789,
    height: 800,
    alt: "Prep 4 Excellence logo",
  },
};

export const statSentence = `${site.stat.lead} ${site.stat.figure} ${site.stat.rest}`;

export const socialLinks: SocialLink[] = [
  site.socials.instagram,
  site.socials.tiktok,
  ...(site.socials.youtube ? [site.socials.youtube] : []),
];

export const mailtoHref = `mailto:${site.email}`;

export type NavItem = { href: string; label: string };

export const routes = {
  home: "/",
  programs: "/programs",
  performingArts: "/performing-arts",
  successStories: "/success-stories",
  about: "/about",
  contact: "/contact",
} as const;

export const primaryNav: NavItem[] = [
  { href: routes.programs, label: "Programs" },
  { href: routes.performingArts, label: "Performing Arts" },
  { href: routes.successStories, label: "Success Stories" },
  { href: routes.about, label: "About" },
];

export const contactNav: NavItem = { href: routes.contact, label: "Contact" };

export const primaryCta = {
  href: routes.contact,
  label: "Ask about a workshop",
} as const;
