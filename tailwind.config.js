export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: "#020617",     // main dark background
        ocean: "#0f172a",    // section cards / subtle backgrounds
        mist: "#94a3b8",     // light text
        aqua: "#38bdf8",     // highlight / links
        calm: "#22d3ee"      // secondary highlight
      },
      animation: {
        "fade-in": "fadeInUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "glow": "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        glow: {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
