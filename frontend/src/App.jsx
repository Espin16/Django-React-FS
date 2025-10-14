import react from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'



function App() {

  return (

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }  
          />
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<RegisterAndLogout />} />
          <Route path="/logout/" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>    
        
  )
}

export default App;




function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}