import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';
import './styles/main.scss';

// import './App.scss';

import Login from './pages/authPages/Login';
import Register from './pages/authPages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route element={<PublicRoute><AuthLayout /></PublicRoute>}>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Register />} />

        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
