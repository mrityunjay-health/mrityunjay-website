import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "outline-variant": "#E2E8F0", 
        "secondary-container": "#F1F5F9", 
        "data-node": "#87AECE", // Sky Blue
        "inverse-primary": "#F8FAFC", 
        "on-surface-variant": "#475569", // Slate 600 for subtitles
        "surface-variant": "#F1F5F9",
        "on-background": "#0F172A", // Slate 900 for premium dark text
        "ink-black": "#0F172A", 
        "outline": "#87AECE", // Sky Blue
        "on-surface": "#0F172A", 
        "error": "#ba1a1a",
        "surface-bright": "#FFFFFF", 
        "memory-glow": "#AFD06E", // Lime Green
        "primary": {
          DEFAULT: "#437118", // Forest Green for buttons
          fixed: "#AFD06E", // Lime Green
          container: "#87AECE", // Sky Blue
        },
        "secondary": "#334155", // Slate 700
        "background": "#EDEDED", // The original requested Light Gray
        "surface": {
          DEFAULT: "#EDEDED",
          container: "#FFFFFF", 
          "container-low": "#E5E5E5", 
          dim: "#D4D4D4",
        },
        "clinical-white": "#FFFFFF", 
      },
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        "double-bezel": "0 0 0 1px rgba(15, 23, 42, 0.05), 0 4px 12px -2px rgba(15, 23, 42, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 1)",
        "double-bezel-dark": "0 0 0 1px rgba(67, 113, 24, 0.1), 0 12px 32px -8px rgba(67, 113, 24, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
        "artifact": "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(135, 174, 206, 0.3)",
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
        "headline-lg": ["Times New Roman", "Times", "serif"],
        "body-lg": ["Times New Roman", "Times", "serif"],
        "label-caps": ["Times New Roman", "Times", "serif"],
        "display-hero": ["Times New Roman", "Times", "serif"],
        "body-md": ["Times New Roman", "Times", "serif"],
        quote: ["Times New Roman", "Times", "serif"],
        "headline-md": ["Times New Roman", "Times", "serif"],
        mono: ["Times New Roman", "Times", "serif"],
        sans: ["Times New Roman", "Times", "serif"],
        serif: ["Times New Roman", "Times", "serif"],
      },
      fontSize: {
        "headline-lg": ["52px", { lineHeight: "60px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-lg": ["22px", { lineHeight: "34px", fontWeight: "400" }],
        "label-caps": ["13px", { lineHeight: "18px", letterSpacing: "0.12em", fontWeight: "600" }],
        "headline-lg-mobile": ["40px", { lineHeight: "48px", fontWeight: "400" }],
        "display-hero": ["92px", { lineHeight: "100px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-md": ["17px", { lineHeight: "26px", fontWeight: "400" }],
        quote: ["32px", { lineHeight: "46px", fontWeight: "300" }],
        "headline-md": ["36px", { lineHeight: "44px", fontWeight: "400" }],
      },
      maxWidth: {
        "container-max": "1280px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blink": "blink 1s step-end infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
