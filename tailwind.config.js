/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        surface: "#0D0D10",
        surface2: "#151518",
        line: "rgba(255,255,255,0.10)",
        muted: "#9A9AA5",
        violet: {
          DEFAULT: "#8405F8",
          deep: "#2C006B",
        },
        magenta: {
          DEFAULT: "#DE15DE",
          deep: "#6A0B59",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "brand-nav": "linear-gradient(90deg, #2C006B 0%, #6A0B59 100%)",
        "brand-cta": "linear-gradient(90deg, #8405F8 0%, #DE15DE 100%)",
        "brand-glow": "radial-gradient(circle at 30% 20%, rgba(132,5,248,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(222,21,222,0.25)",
      },
    },
  },
  plugins: [],
};
