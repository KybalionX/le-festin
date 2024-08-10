import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationES from '../../public/locales/es/translation.json';
import translationEN from '../../public/locales/en/translation.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    resources: {
      es: {
        translation: translationES,
      },
      en: {
        translation: translationEN,
      },
    },
    fallbackLng: 'en',
  });

export default i18next;
