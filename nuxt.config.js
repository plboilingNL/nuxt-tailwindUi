import i18n from "./config/i18n";
const config = require("./.contentful.json");

export default {
  /*
   ** Nuxt.js modules
   */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
  },
  module: {
    rules: [
      {
        resourceQuery: /\bblockType=i18n\b/,
        loader: "@kazupon/vue-i18n-loader",
      },
      //, Other rules
    ],
  },
  buildModules: [
    [
      "nuxt-i18n",
      {
        defaultLocale: "pl",
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "pl",
            name: "Polski",
          },
          {
            code: "nl",
            name: "Nederlands",
          },
        ],
        vueI18n: i18n,
      },
    ],
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // Doc: https://github.com/nuxt-community/google-fonts-module
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    Inter: true,
  },
};
