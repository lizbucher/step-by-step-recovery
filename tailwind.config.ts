import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.json"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        bg: "#F4F1EB",
        surface: "#FFFFFF",
        "surface-elevated": "#FBF8F3",
        ink: "#1C1F1B",
        "ink-muted": "#6B6F66",
        "ink-subtle": "#9A968D",
        forest: { DEFAULT: "#2F4A3A", deep: "#1F3528", soft: "#E8EDE7" },
        clay: { DEFAULT: "#B8623E", deep: "#94492C", soft: "#F1E2D7" },
        line: { DEFAULT: "#E0DBD0", strong: "#C9C2B3" },
        "section-dark": "#1C2620",
        "section-dark-text": "#E8EDE7",
      },
      fontFamily: {
        display: ['var(--font-display)', "system-ui", "sans-serif"],
        sans: ['var(--font-body)', "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.08em" }],
        h1: ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        h2: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h3: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "body-long": ["1.125rem", { lineHeight: "1.7" }],
        stat: ["clamp(3.5rem, 7.5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(28, 31, 27, 0.06)",
        "card-hover": "0 12px 32px rgba(28, 31, 27, 0.10)",
        elevated: "0 16px 48px rgba(28, 31, 27, 0.12)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
