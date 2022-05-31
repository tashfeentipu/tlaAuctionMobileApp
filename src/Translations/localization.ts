import i18n from 'i18n-js';
import en from './en.json';

i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = { en };
const Translate = (key: string, args?: any) => {
  if (!key) {
    return '';
  }
  return i18n.t(key, args);
};
export { i18n, Translate };

// import i18n from 'i18next';
// import en from './en.json';
// import { initReactI18next } from "react-i18next";

// i18n.use(initReactI18next).init({
//   lng: "en",
//   resources: {
//     en: en,
//   },
//   react: {
//     useSuspense: false
//   }
// })

// export default i18n