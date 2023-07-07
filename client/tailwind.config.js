/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        theme: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          third: "var(--color-third)",
          dark: "var(--color-dark)",
          white: "var(--color-white)",
        },
      },
      textColor: {
        theme: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          third: "var(--color-third)",
          dark: "var(--color-dark)",
          white: "var(--color-white)",
        },
      },
      borderColor: {
        theme: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          third: "var(--color-third)",
          dark: "var(--color-dark)",
          white: "var(--color-white)",
        },
      },
    },
  },
  plugins: [],
};
