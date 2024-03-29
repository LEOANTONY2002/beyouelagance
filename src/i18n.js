import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "COMPANY": "COMPANY",
      "Home":'Home'
    }
  },
  fr: {
    translation: {
      "COMPANY": "ENTREPRISE",
      "Home":'Maison'
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: process.env.REACT_APP_DEV === 'true' ? "en": 'fr',
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;