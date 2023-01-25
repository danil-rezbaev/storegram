import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import * as localLocales from './locales'

export const DEFAULT_LANGUAGE = 'ru'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: localLocales,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
