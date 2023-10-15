import { configureStore } from '@reduxjs/toolkit'
import { projectsApi } from '../services/project'

export const store = configureStore({
  reducer: { [projectsApi.reducerPath]: projectsApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
