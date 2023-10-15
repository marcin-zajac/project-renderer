import { Item, Project } from '../../types'

const drawRectangle = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, item: Item) => {
  const { x, y, width, height, rotation } = item
  svg
    .append('rect')
    .attr('x', x - width / 2)
    .attr('y', y - height / 2)
    .attr('width', width)
    .attr('height', height)
    .attr('fill', item.color)
    .attr('transform', `rotate(${rotation},${x},${y})`)
}

const drawEllipse = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, item: Item) => {
  const { x, y, width, height, rotation } = item
  svg
    .append('ellipse')
    .attr('cx', x)
    .attr('cy', y)
    .attr('rx', width / 2)
    .attr('ry', height / 2)
    .attr('fill', item.color)
    .attr('transform', `rotate(${rotation},${x},${y})`)
}
const drawLabel = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, item: Item) => {
  const { x, y, color, rotation } = item
  svg
    .append('circle')
    .attr('cx', x)
    .attr('cy', y)
    .attr('r', 3)
    .attr('fill', getContrastColor(color))

  svg
    .append('text')
    .attr('x', x + 5)
    .attr('y', y - 5)
    .attr('fill', getContrastColor(color))
    .text(rotation + '°')
}

const drawBoundingBox = (
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  item: Item
) => {
  const boundingBox = getBoundingBox(item)
  svg
    .append('rect')
    .attr('x', boundingBox.x)
    .attr('y', boundingBox.y)
    .attr('width', boundingBox.width)
    .attr('height', boundingBox.height)
    .attr('fill', 'none')
    .attr('stroke', 'red')
}

const getBoundingBox = (item: Item) => {
  const { x, y, width, height, rotation, type } = item

  const boundingBoxHeight =
    width * Math.abs(Math.sin((rotation * Math.PI) / 180)) +
    height * Math.abs(Math.cos((rotation * Math.PI) / 180))

  const boundingBoxWidth =
    width * Math.abs(Math.cos((rotation * Math.PI) / 180)) +
    height * Math.abs(Math.sin((rotation * Math.PI) / 180))

  return {
    x: x - boundingBoxWidth / 2,
    y: y - boundingBoxHeight / 2,
    width: boundingBoxWidth,
    height: boundingBoxHeight,
  }
}

const drawBackground = (
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  project: Project
) => {
  const { width, height } = project
  svg.append('rect').attr('width', width).attr('height', height).attr('fill', 'silver')
}

const getContrastColor = (hexColor: string): string => {
  const r: number = parseInt(hexColor.substring(1, 3), 16)
  const g: number = parseInt(hexColor.substring(3, 5), 16)
  const b: number = parseInt(hexColor.substring(5, 7), 16)
  const brightness: number = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? '#FFFFFF' : '#000000'
}
export { drawRectangle, drawEllipse, drawLabel, drawBoundingBox, drawBackground, getContrastColor }
