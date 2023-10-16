import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import localesEN from './locales/en.json'
import localesPL from './locales/pl.json'

const resources = {
  pl: {
    translation: localesPL,
  },
  en: {
    translation: localesEN,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
