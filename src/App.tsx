import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './i18n'
import MainPage from './pages/MainPage'
import ProjectPage from './pages/ProjectPage'

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  )
}

export default App
