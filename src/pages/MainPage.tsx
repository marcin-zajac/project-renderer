import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Error from '../components/Error/Error'
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher'
import Loader from '../components/Loader/Loader'
import { useGetInitProjectQuery } from '../services/project'

const MainPage = () => {
  const { data, error, isLoading } = useGetInitProjectQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })
  const { t } = useTranslation()

  const [projectId, setProjectId] = useState<string | null>(null)

  if (error) {
    return <Error error={error} />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <section className="hero is-small is-primary">
        <span className="column is-1 is-offset-11">
          <LanguageSwitcher />
        </span>
        <div className="hero-body">
          <p className="title">{t('appTitle')}</p>
          <p className="subtitle">{t('appSubtitle')}</p>
        </div>
      </section>

      <div className="container mt-2">
        {t('type')} <strong>{t('project_id')}</strong> {t('or_view_random')}
        <input
          className="input is-primary column is-half is-offset-one-quarter mt-2"
          type="text"
          placeholder={t('projectIdPlaceholder')}
          onChange={(e) => setProjectId(e.target.value)}
        />
        {data && (
          <Link to={`/project/${projectId ?? data.id}`}>
            <button className=" button is-primary column is-half is-offset-one-quarter mt-3 pt-2">
              {t('view')}
            </button>
          </Link>
        )}
      </div>
    </>
  )
}

export default MainPage
