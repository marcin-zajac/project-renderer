import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RecentProject {
  id: string
  name: string
}

export interface RecentProjectsState {
  recentProject: RecentProject[]
}

const initialState: RecentProjectsState = {
  recentProject: [],
}

const recentProjectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProjectToList: (state, action: PayloadAction<RecentProject>) => {
      const isDuplicate = state.recentProject.some((project) => project.id === action.payload.id)
      if (!isDuplicate) {
        state.recentProject.push(action.payload)
      }
    },
  },
})

export const { addProjectToList } = recentProjectsSlice.actions

export default recentProjectsSlice.reducer
