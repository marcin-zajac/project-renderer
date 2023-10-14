import React from 'react'
import { useGetInitProjectQuery } from '../services/project'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { data, error, isLoading } = useGetInitProjectQuery()
  const { t } = useTranslation()

  return (
    <>
      <div>MainPage</div>
      {data && (
        <Link to={`${t('routes.project')}/${data.id}`}>
          <button>Go to random projects</button>
        </Link>
      )}
    </>
  )
}

export default MainPage
