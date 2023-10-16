import * as d3 from 'd3'
import React from 'react'
import { Project } from '../../types'
import { drawBackground, drawBoundingBox, drawEllipse, drawLabel, drawRectangle } from './helpers'

interface Props {
  project: Project
}

const SvgRenderer: React.FC<Props> = ({ project }) => {
  const svgRef = React.useRef<SVGSVGElement>(null)

  React.useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      svg.selectAll('*').remove()
      drawBackground(svg, project)
      project.items.forEach((item) => {
        if (item.type === 'rectangle') {
          drawRectangle(svg, item)
        } else if (item.type === 'ellipse') {
          drawEllipse(svg, item)
        }
        drawLabel(svg, item)
        drawBoundingBox(svg, item)
      })
    }
  }, [project])

  return (
    <svg
      width="100%"
      height="100%"
      style={{ flex: '0 1 100%', width: '100vw', height: 'calc(100vh - 255px' }}
    >
      <svg ref={svgRef} viewBox={`0 0 ${project.width} ${project.height}`} />
    </svg>
  )
}

export default SvgRenderer
