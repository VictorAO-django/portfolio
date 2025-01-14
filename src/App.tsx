import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import NotFound from './pages/not_found';
import './App.css'
import Layout from './pages/layout';
import Home from './pages/home';
import Resume from './pages/resume';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='resume' element={<Resume />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
