import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '../Layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Signup from '../pages/Auth/Signup'
import Forgotpassword from '../pages/Auth/Forgotpassword'
import Verification from '../pages/Auth/Verification'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes with Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<Forgotpassword />} />
          <Route path="/auth/verification" element={<Verification />} />

       
        </Route>

        {/* Default Route - Redirect to Login */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
