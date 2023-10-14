import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProjectByIdQuery } from '../services/project'

const ProjectPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetProjectByIdQuery(String(id))

  console.log({ id })

  return (
    <>
      <div>Project {id}</div>
      {data && JSON.stringify(data)}
    </>
  )
}

export default ProjectPage
