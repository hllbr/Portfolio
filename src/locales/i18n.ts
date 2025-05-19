import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslation from './en/translation.json';
import trTranslation from './tr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      tr: {
        translation: trTranslation
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 