/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e14",       // page background (near-black, slight blue)
        panel: "#111823",     // card background
        line: "#1e2836",      // borders
        mut: "#8b97a7",       // muted text
        txt: "#e6ebf2",       // primary text
        accent: "#4aa8ff",    // blue accent
        accent2: "#33e08a",   // green accent (secondary)
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
