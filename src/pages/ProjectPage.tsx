import React from 'react'
import { useParams } from 'react-router'

const ProjectPage = () => {
  const { id } = useParams()

  console.log({ id })

  return <div>Project{id}</div>
}

export default ProjectPage
