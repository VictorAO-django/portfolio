import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import NotFound from './pages/not_found';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot-password' element={<ForgetPassword />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='transfer' element={<PayWithTransfer />} />
        </Route>

        <Route path='portal' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
        </Route> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
