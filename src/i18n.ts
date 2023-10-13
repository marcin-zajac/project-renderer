import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import localesPL from './locales/pl.json'

const resources = {
  pl: {
    translation: localesPL,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
})
