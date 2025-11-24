import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';
import commonFR from './locales/fr/common.json';
import homeFR from './locales/fr/home.json';

const resources = {
  en: {
    common: commonEN,
    home: homeEN,
  },
  fr: {
    common: commonFR,
    home: homeFR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home'],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
