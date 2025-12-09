import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '../Layouts/AuthLayout'
import Signup from '../pages/Auth/Signup'
import Forgotpassword from '../pages/Auth/Forgotpassword'
import Verification from '../pages/Auth/Verification'
import SplashScreen from '../pages/Auth/SplashScreen'
import DashboardLayout from '../Layouts/DashboardLayout'
import Login from '../pages/Auth/Login'
import Home from '../pages/Dashboard/Home'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes with Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<Forgotpassword />} />
          <Route path="/auth/verification" element={<Verification />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>

        {/* Default Route - Redirect to Login */}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
