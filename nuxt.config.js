import i18n from "./config/i18n";
import dotenv from "dotenv";
dotenv.config();

export default {
  /*
   ** Nuxt.js modules
   */
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
  },
  plugins: ["~/plugins/contentful", "~/plugins/posts"],
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
