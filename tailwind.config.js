module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "from-gray-900",
        "from-gray-800",
        "from-gray-700",
        "via-purple-900",
        "via-red-900",
        "via-green-900",
        "to-indigo-900",
        "to-yellow-900",
        "to-green-800",
      ],
    },
  },
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {},
  plugins: [
    // require("@tailwindcss/aspect-ratio")
  ],
};
