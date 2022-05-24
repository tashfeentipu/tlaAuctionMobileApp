import i18n from 'i18next';
import en from './en.json';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: en,
  },
  react: {
    useSuspense: false
  }
})

export default i18n