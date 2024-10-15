import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import enCV from "./locales/en_cv.json";
import esCV from "./locales/es_cv.json";
import esCtf from "./locales/es_ctf.json";
import enCtf from "./locales/en_ctf.json";
import esFront from "./locales/es_front.json";
import enFront from "./locales/en_front.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
      fallbackLng: "es",
    },
    resources: {
      en: {
        translation: en,
        cv: enCV,
        ctfs: enCtf,
        projects: enFront,
      },
      es: {
        translation: es,
        cv: esCV,
        ctfs: esCtf,
        projects: esFront,
      },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
