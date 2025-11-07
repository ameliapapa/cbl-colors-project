// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './home/index.jsx'
// @ts-ignore
import AboutPage from './about-me/index.jsx'
// @ts-ignore
import WorksPage from './works/index.jsx'
// @ts-ignore
import BlogPage from './blog/index.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  )
}

export default App
