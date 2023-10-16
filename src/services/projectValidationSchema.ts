import * as yup from 'yup'

const itemSchema = yup.object().shape({
  id: yup.string().required(),
  type: yup.mixed().oneOf(['rectangle', 'ellipse']).required(),
  color: yup.string().required(),
  rotation: yup.number().required(),
  x: yup.number().required(),
  y: yup.number().required(),
  width: yup.number().required(),
  height: yup.number().required(),
})

const projectSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  width: yup.number().required(),
  height: yup.number().required(),
  items: yup.array().of(itemSchema),
})

const projectResponseSchema = yup.object().shape({
  id: yup.string().required(),
  project: projectSchema,
})

const initProjectResponseSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  modified: yup.number().required(),
})

export { itemSchema, projectSchema, projectResponseSchema, initProjectResponseSchema }
