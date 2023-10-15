import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { InitProjectResponse, ProjectResponse } from '../types'

const baseUrl = process.env.REACT_APP_ABI_BASE_URL

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjectById: builder.query<ProjectResponse, string>({
      query: (id) => `project/${id}`,
    }),
    getInitProject: builder.query<InitProjectResponse, void>({
      query: () => 'init',
    }),
  }),
})

export const { useGetProjectByIdQuery, useGetInitProjectQuery } = projectsApi
