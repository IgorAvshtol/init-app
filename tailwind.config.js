module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mountains: "url('/src/image/mountains.jpg')",
        apartments: "url('/src/image/apartments.webp')",
      },
      inset: {
        '12%': '12%',
      },
    },
  },
  plugins: [],
};
