module.exports = {
  // images: {
  //   domains: ['cdn.shopify.com']
  // },
  // i18n: {
  //   locales: ["ja", "en", "kr"],
  //   defaultLocale: "ja",
  // },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }

    return config;
  },
  env: {
    customKey: "my-value",
    company: {
      ja: "合同会社SBO",
      en: "SBO LLC",
      person: "TUNG HAN SHEN",
      tel: "092-980-4282",
      address: "〒812-0883 福岡市博多区南本町2-1-9",
    },
    site: {
      name: "FAT Light SLIM",
      url: "http://fatlightslim.com/",
      email: "hello@fatlightslim.com",
      twitter: "@fatlightslim",
    },
  },
};
