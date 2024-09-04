const config = {
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
  ns: ["common"],
};
module.exports = config;
