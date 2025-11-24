import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';
import careersEN from './locales/en/careers.json';
import aboutEN from './locales/en/about.json';
import caseStudiesEN from './locales/en/caseStudies.json';
import contactEN from './locales/en/contact.json';
import executiveCoachingEN from './locales/en/executiveCoaching.json';
import partnershipsEN from './locales/en/partnerships.json';
import staffTrainingEN from './locales/en/staffTraining.json';
import commonFR from './locales/fr/common.json';
import homeFR from './locales/fr/home.json';
import careersFR from './locales/fr/careers.json';
import aboutFR from './locales/fr/about.json';
import caseStudiesFR from './locales/fr/caseStudies.json';
import contactFR from './locales/fr/contact.json';
import executiveCoachingFR from './locales/fr/executiveCoaching.json';
import partnershipsFR from './locales/fr/partnerships.json';
import staffTrainingFR from './locales/fr/staffTraining.json';

const resources = {
  en: {
    common: commonEN,
    home: homeEN,
    careers: careersEN,
    about: aboutEN,
    caseStudies: caseStudiesEN,
    contact: contactEN,
    executiveCoaching: executiveCoachingEN,
    partnerships: partnershipsEN,
    staffTraining: staffTrainingEN,
  },
  fr: {
    common: commonFR,
    home: homeFR,
    careers: careersFR,
    about: aboutFR,
    caseStudies: caseStudiesFR,
    contact: contactFR,
    executiveCoaching: executiveCoachingFR,
    partnerships: partnershipsFR,
    staffTraining: staffTrainingFR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'careers', 'about', 'caseStudies', 'contact', 'executiveCoaching', 'partnerships', 'staffTraining'],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
