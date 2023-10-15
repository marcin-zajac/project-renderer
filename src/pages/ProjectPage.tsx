import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProjectByIdQuery } from '../services/project'
import SvgRenderer from '../components/SvgRenderer/SvgRenderer'

const ProjectPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetProjectByIdQuery(String(id))

  console.log({ id })

  return (
    <>
      <div>Project {id}</div>
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

export default ProjectPage
