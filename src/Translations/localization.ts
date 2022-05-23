import i18next from 'i18next';
import en from './en.json';
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: en
  },
  react: {
    useSuspense: false
  }
})


export { i18next };