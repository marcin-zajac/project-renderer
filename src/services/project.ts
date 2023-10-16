import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { t } from 'i18next'
import { InitProjectResponse, ProjectResponse } from '../types'
import { initProjectResponseSchema, projectSchema } from './projectValidationSchema'

const baseUrl = process.env.REACT_APP_ABI_BASE_URL

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjectById: builder.query<ProjectResponse, string>({
      query: (id) => `project/${id}`,
      transformResponse: (response: ProjectResponse) => {
        try {
          projectSchema.validateSync(response.project)
          return response
        } catch (error) {
          throw new Error(t('invalid_project_data'))
        }
      },
    }),
    getInitProject: builder.query<InitProjectResponse, void>({
      query: () => 'init',
      transformResponse: (response: InitProjectResponse) => {
        try {
          initProjectResponseSchema.validateSync(response)
          return response
        } catch (error) {
          throw new Error(t('invalid_initial_project_data'))
        }
      },
    }),
  }),
})

export const { useGetProjectByIdQuery, useGetInitProjectQuery, useLazyGetInitProjectQuery } =
  projectsApi
