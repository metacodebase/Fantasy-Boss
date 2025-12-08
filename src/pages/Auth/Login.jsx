import { Link } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <button className="text-xl">
          <iconify-icon icon="maki:cross" />
          </button>
        <h6 className="font-bold text-2xl">Login</h6>
        <div></div>
      </div>

      <form className="flex flex-col gap-6" >
        <div>
          <div className="flex items-center justify-between md:text-xl text-gray">
            <div className="font-medium">Username or Email</div>
          </div>
          <input type="email" className="auth-input" />
        </div>
        <div>
          <div className="flex items-center justify-between md:text-xl text-gray">
            <div className="font-medium">Password</div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-gray hover:text-yellow transition"
            >
              {showPassword ? (
                <iconify-icon icon="jam:eye-close-f"></iconify-icon>
              ) : (
                <iconify-icon icon="mdi:eye-outline"></iconify-icon>
              )}
            </button>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            className="auth-input"
          />
        </div>
        <Link to="/auth/forgot-password" className="text-yellow">Forgot password?</Link>
        
        <div className="my-3">
          <button className="border-2 border-white rounded-xl flex items-center justify-between px-8 h-16 w-full md:text-xl text-white">
            <div className="font-medium">Sign up with Facebook</div>
            <span className="text-2xl">
              <iconify-icon icon="entypo-social:facebook"></iconify-icon>
            </span>
          </button>
        </div>

        <button className="yellow-button">Login</button>
        <div className="text-yellow text-center uppercase">
             Need an account?
        <Link to="/auth/signup" > Sign UP!</Link>

        </div>
   
    


      </form>
   
    </div>
  )
}

export default Login
