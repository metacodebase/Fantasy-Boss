import { Link } from "react-router-dom"
import { useState } from "react"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  return (
   <div>
      <div className="flex items-center justify-center mb-12">
        
        <h6 className="font-bold text-2xl">Create an account</h6>
       
      </div>

      <form className="flex flex-col gap-6" >
        <div>
          <div className="flex items-center justify-between md:text-xl text-gray">
            <div className="font-medium">Your email</div>
     
          </div>
          <input type="email" className="auth-input" />
        </div>
        <div>
          <div className="flex items-center justify-between md:text-xl text-gray">
            <div className="font-medium">Cell #</div>
     
          </div>
          <input type="number" className="auth-input" />
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
       <div>
          <div className="flex items-center justify-between md:text-xl text-gray">
            <div className="font-medium">Re-enter password</div>
            <button
              type="button"
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              className="cursor-pointer text-gray hover:text-yellow transition"
            >
              {showPasswordConfirm ? (
                <iconify-icon icon="jam:eye-close-f"></iconify-icon>
              ) : (
                <iconify-icon icon="mdi:eye-outline"></iconify-icon>
              )}
            </button>
          </div>
          <input
            type={showPasswordConfirm ? "text" : "password"}
            className="auth-input"
          />
        </div>
        <div className="my-3">
          <button className="border-2 border-white rounded-xl flex items-center justify-between px-8 h-16 w-full md:text-xl text-white">
            <div className="font-medium">Sign up with Facebook</div>
            <span className="text-2xl">
              <iconify-icon icon="entypo-social:facebook"></iconify-icon>
            </span>
          </button>
        </div>
        <div className="text-white font-medium text-center text-sm lg:text-[16px]">

        By continuing, you agree to the FantasyBoss <br className="hidden lg:block"/> <Link className="text-[#FAAF16]" to="/terms-of-service">Terms of Service</Link> and acknowledge that you have read our <Link className="text-[#FAAF16]" to="/privacy-policy">Privacy Policy</Link>.
        </div>

        <button className="yellow-button">Register</button>
        <div className="text-yellow text-center">
        have an account? 
        <Link to="/auth/login"> Sign IN!</Link>

        </div>
      </form>
   
    </div>
  )
}

export default Signup
