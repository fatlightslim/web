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
        /^bg-/,
        /^text-/,
        /^from-/,
        /^via-/,
        /^to-/,
        "hover:bg-indigo-700",
      ],
      // safelist: [
      //   "hover:bg-indigo-700",
      //   "lg:col-start-6",
      //   "lg:col-end-8",
      //   "lg:row-start-2",
      //   "lg:row-end-3",
      //   "lg:mx-0",
      //   "lg:max-w-none",
      //   "lg:col-start-1",
      //   "lg:row-start-2",
      //   "lg:row-end-3",
      //   "lg:col-end-3",
      // ],
    },
  },
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  // variants: {
  //   extend: {
  //     border: ["last"],
  //   },
  // },
  plugins: [
    // require("@tailwindcss/aspect-ratio")
  ],
}
