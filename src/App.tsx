import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import PageNotFound from './pages/not_found';
import './App.css'
import Layout from './pages/layout';
import Home from './pages/home';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Project from './pages/project';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='resume' element={<Resume />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolio/:project' element={<Project />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
