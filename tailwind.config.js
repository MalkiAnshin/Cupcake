/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../**/*.{jsx,html}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "15rem",
          "2xl": "22rem",
        },
      },
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
  
    },
  },
  plugins: [],
}

