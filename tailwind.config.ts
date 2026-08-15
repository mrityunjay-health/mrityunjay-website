import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "outline-variant": "#c4c6d0",
        "secondary-container": "#d9e1e3",
        "data-node": "#D1D5DB",
        "inverse-primary": "#a9c7ff",
        "on-surface-variant": "#43474f",
        "surface-variant": "#e2e2e2",
        "on-background": "#1a1c1c",
        "ink-black": "#1A1A1A",
        "outline": "#747780",
        "on-surface": "#1a1c1c",
        "error": "#ba1a1a",
        "surface-bright": "#f9f9f9",
        "memory-glow": "#A5D8FF",
        "primary": {
          DEFAULT: "#001736",
          fixed: "#d6e3ff",
          container: "#002b5b",
        },
        "secondary": "#586062",
        "background": "#f9f9f9",
        "surface": {
          DEFAULT: "#f9f9f9",
          container: "#eeeeee",
          "container-low": "#f3f3f3",
          dim: "#dadada",
        },
        "clinical-white": "#FFFFFF",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "margin-mobile": "20px",
        "section-gap-md": "80px",
        "section-gap-lg": "160px",
        gutter: "32px",
        "container-max": "1280px",
        unit: "8px",
      },
      fontFamily: {
        "headline-lg": ["var(--font-newsreader)", "serif"],
        "body-lg": ["var(--font-manrope)", "sans-serif"],
        "label-caps": ["var(--font-hanken-grotesk)", "sans-serif"],
        "display-hero": ["var(--font-newsreader)", "serif"],
        "body-md": ["var(--font-manrope)", "sans-serif"],
        quote: ["var(--font-newsreader)", "serif"],
        "headline-md": ["var(--font-newsreader)", "serif"],
      },
      fontSize: {
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-lg": ["20px", { lineHeight: "32px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
        "headline-lg-mobile": ["36px", { lineHeight: "44px", fontWeight: "400" }],
        "display-hero": ["84px", { lineHeight: "92px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        quote: ["28px", { lineHeight: "42px", fontWeight: "300" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "400" }],
      },
      maxWidth: {
        "container-max": "1280px",
      },
      animation: {
        "fade-in-up": "fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
