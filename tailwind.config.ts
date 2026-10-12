import type { Config } from "tailwindcss";

// Design tokens live in src/app/globals.css (CSS variables). Brand purples keep the original CurePlus palette
// (Tailwind "purple" scale + the #311745 footer colour); everything else is neutral.
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerbackground: "var(--footer-background)",
        brand: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#311745",
        },
        ink: {
          DEFAULT: "#1f1a2e",
          soft: "#4b4560",
          muted: "#5f5a72",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans Kannada",
          "sans-serif",
        ],
      },
      // Fluid type scale (clamp) – use text-display / text-h1 / text-h2 / text-h3 / text-lead
      fontSize: {
        display: ["clamp(2.25rem, 1.45rem + 3.8vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "800" }],
        h1: ["clamp(2rem, 1.4rem + 2.8vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        h2: ["clamp(1.65rem, 1.25rem + 1.9vw, 2.55rem)", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
        h3: ["clamp(1.125rem, 1rem + 0.55vw, 1.45rem)", { lineHeight: "1.3", fontWeight: "600" }],
        lead: ["clamp(1.05rem, 0.98rem + 0.4vw, 1.25rem)", { lineHeight: "1.65" }],
      },
      borderRadius: {
        card: "1.125rem",
        panel: "1.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(49 23 69 / 0.06), 0 6px 20px -6px rgb(49 23 69 / 0.12)",
        pop: "0 2px 4px rgb(49 23 69 / 0.08), 0 18px 40px -12px rgb(49 23 69 / 0.28)",
        header: "0 1px 0 rgb(49 23 69 / 0.06), 0 8px 24px -12px rgb(49 23 69 / 0.18)",
      },
      keyframes: {
        drawerIn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        riseIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drawerIn: "drawerIn 0.28s cubic-bezier(0.22,1,0.36,1)",
        fadeIn: "fadeIn 0.25s ease-out",
        riseIn: "riseIn 0.35s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
