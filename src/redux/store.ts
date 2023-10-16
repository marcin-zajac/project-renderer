import { configureStore } from '@reduxjs/toolkit'
import recentProjectsReducer from '../components/RecentProjects/recentProjectSlice'
import { projectsApi } from '../services/project'

export const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    recentProjects: recentProjectsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
