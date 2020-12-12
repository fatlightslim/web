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
    shopify: {
        domain: "fatlightslim.myshopify.com",
        storefrontAccessToken: "1916a03edc91d97ee7ee99f5ab8add14",
    },
    sp3000: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTg4MzQzNzI2MDk1Ng==",
    sp150: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTg4Mzc1OTU2NzAwNA==",
    customKey: "my-value",
    company: {
      ja: "合同会社SBO",
      en: "SBO LLC",
      person: "TUNG HAN SHEN",
      tel: "092-980-4282",
      address: "〒812-0883 福岡市博多区南本町2-1-9",
    },
    site: {
      name: "FATLightSLIM",
      url: "http://fatlightslim.com/",
      email: "hello@fatlightslim.com",
      twitter: "@fatlightslim",
    },
  },
};
