import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationAr from "./locales/ar/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    ar: { translation: translationAr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
