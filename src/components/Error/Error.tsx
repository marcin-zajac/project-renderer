import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface ErrorProps {
  error: FetchBaseQueryError | SerializedError
}

const Error = ({ error }: ErrorProps) => {
  const { t } = useTranslation()
  const errMsg = (error as { message: string }).message

  return (
    <article className="message column is-half is-offset-one-quarter px-0">
      <div className="message-header">
        <p>
          {t('error')} {'status' in error && error.status}
        </p>
      </div>
      <div className="message-body">{errMsg}</div>
      <Link to={`/`}>
        <button className={`button`}>{t('go_to_main_page')}</button>
      </Link>
    </article>
  )
}

export default Error
