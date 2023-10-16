import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Error from '../components/Error/Error'
import Loader from '../components/Loader/Loader'
import RecentProjects from '../components/RecentProjects/RecentProjects'
import { addProjectToList } from '../components/RecentProjects/recentProjectSlice'
import SvgRenderer from '../components/SvgRenderer/SvgRenderer'
import { useGetProjectByIdQuery, useLazyGetInitProjectQuery } from '../services/project'

const ProjectPage = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [projectId, setProjectId] = useState('')
  const { data, error, isLoading } = useGetProjectByIdQuery(String(id))
  const [trigger, { data: randomProjectData, isLoading: randomProjectIsLoading }] =
    useLazyGetInitProjectQuery()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectId(event.target.value)
  }
  const handleClick = () => {
    if (projectId) {
      navigate(`/project/${projectId}`)
    } else {
      trigger()
      randomProjectData && navigate(`/project/${randomProjectData?.id}`)
    }
  }

  if (error) {
    return <Error error={error} />
  }
  if (isLoading) {
    return <Loader />
  }

  if (data) {
    const { id, name } = data.project
    dispatch(addProjectToList({ id, name }))
    return (
      <>
        <section className="hero is-small is-primary pb-3">
          <Link to="/">⬅︎</Link>
          <div className="hero-body">
            <p className="title">{data?.project.name}</p>
            <p className="subtitle">{data?.project.id}</p>
          </div>

          <div className="field is-grouped column is-half is-offset-one-quarter">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder={t('find_other_project_or_get_random')}
                value={projectId}
                onChange={handleInputChange}
              />
            </p>
            <p className="control">
              <button
                className={`button is-info ${randomProjectIsLoading ? 'is-loading' : ''}`}
                onClick={handleClick}
              >
                {t('search')}
              </button>
            </p>
          </div>

          <RecentProjects />
        </section>
        <div
          style={{
            display: 'flex',
            flex: '1 1',
            background: '#d3d3d3',
            alignItems: 'stretch',
            width: '100%',
          }}
        >
          {data && <SvgRenderer project={data.project} />}
        </div>
      </>
    )
  }
  return null
}

export default ProjectPage
