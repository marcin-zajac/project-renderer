import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <span onClick={() => changeLanguage('en')}>🇺🇸</span>
      <span onClick={() => changeLanguage('pl')}>🇵🇱</span>
    </>
  )
}

export default LanguageSwitcher
