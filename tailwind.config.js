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
        "from-gray-800",
        "via-purple-900",
        "to-indigo-900",
        "from-gray-700",
        "via-red-900",
        "to-yellow-900",
        "from-gray-700",
         "via-red-900",
         "to-yellow-900"
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
  plugins: [],
};
