import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '../Layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes with Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>

        {/* Default Route - Redirect to Login */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
