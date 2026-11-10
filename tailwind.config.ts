import type { Config } from "tailwindcss";

// Brand tokens for Prep For Excellence. Roles are documented in BUILD_NOTES.md
// together with the contrast ratio of every pairing that is used.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Declared in full (not under extend) so the custom "nav" breakpoint sorts
    // between lg and xl. The desktop navigation needs about 1000 px, so the
    // mobile menu stays until 1100 px.
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      nav: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: "#1D1033", // primary text, footer surface, redaction bars
        purple: {
          DEFAULT: "#4B2A86", // brand purple: primary surface and headings
          deep: "#2A1558", // darker surface for the stat slab and bands
        },
        green: {
          DEFAULT: "#00B85C", // brand green: action fill and large accents
          text: "#00703A", // text-safe green for small text on light surfaces
        },
        mint: {
          DEFAULT: "#E8F6EE", // pale canvas
          ink: "#A5EBC1", // accent text on purple surfaces
        },
        lilac: "#F3EDFB", // paper surface behind letter excerpts
        lav: "#D9CCF2", // muted text on purple surfaces
        muted: "#574A70", // muted text on light surfaces
        rule: "#8E7BB5", // control borders (3:1 on light surfaces)
        line: "#D8CFE8", // decorative hairlines
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Georgia", '"Times New Roman"', "serif"],
        sans: [
          '"Public Sans Variable"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        label: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.14em" }],
        "display-xl": ["clamp(2.375rem, 4.6vw + 0.75rem, 4.75rem)", { lineHeight: "1" }],
        "display-lg": ["clamp(2.125rem, 3.2vw + 1.1rem, 3.75rem)", { lineHeight: "1.04" }],
        "display-md": ["clamp(1.625rem, 1.4vw + 1.15rem, 2.375rem)", { lineHeight: "1.12" }],
        figure: ["clamp(3rem, 4vw + 1.5rem, 5rem)", { lineHeight: "0.95" }],
        "figure-sm": ["clamp(2.25rem, 2.4vw + 1.2rem, 3.5rem)", { lineHeight: "1" }],
      },
      maxWidth: {
        site: "78rem",
      },
    },
  },
  plugins: [],
};

export default config;
