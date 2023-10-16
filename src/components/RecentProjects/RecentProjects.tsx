import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'

const RecentProjects = () => {
  const { t } = useTranslation()
  const { recentProject } = useSelector((state: RootState) => state.recentProjects)

  const scrollableDivRef = useRef<HTMLDivElement>(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true)
    setStartX(e.pageX - scrollableDivRef.current!.offsetLeft)
    setScrollLeft(scrollableDivRef.current!.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return
    e.preventDefault()
    const x = e.pageX - scrollableDivRef.current!.offsetLeft
    const walk = (x - startX) * 2
    scrollableDivRef.current!.scrollLeft = scrollLeft - walk
  }

  return (
    <div
      ref={scrollableDivRef}
      style={{
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        cursor: 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {recentProject &&
        recentProject.map((project, idx) => {
          return (
            <Link key={idx} replace to={`/project/${project.id}`}>
              <button className="button is-light is-rounded is-small mx-1">{project.name}</button>
            </Link>
          )
        })}
    </div>
  )
}

export default RecentProjects
