import { Link } from "react-router-dom"

const Signup = () => {
  return (
   <div>
      <div className="flex items-center justify-between mb-12">
        <button className="text-xl">
          <iconify-icon icon="maki:cross" />
          </button>
        <h6 className="font-bold text-2xl">Create an account</h6>
        <div></div>
      </div>

      <form className="flex flex-col gap-6" >
        <div>
          <div className="flex items-center justify-between text-xl text-gray">
            <div className="font-medium">Your email</div>
          <iconify-icon icon="mdi:eye-outline"></iconify-icon>
          </div>
          <input type="email" className="auth-input" />
        </div>
        <div>
          <div className="flex items-center justify-between text-xl text-gray">
            <div className="font-medium">Cell #</div>
          <iconify-icon icon="mdi:eye-outline"></iconify-icon>
          </div>
          <input type="number" className="auth-input" />
        </div>
       <div>
          <div className="flex items-center justify-between text-xl text-gray">
            <div className="font-medium">Password</div>
          <iconify-icon icon="mdi:eye-outline"></iconify-icon>
          </div>
          <input type="password" className="auth-input" />
        </div>
       <div>
          <div className="flex items-center justify-between text-xl text-gray">
            <div className="font-medium">Re-enter password</div>
          <iconify-icon icon="mdi:eye-outline"></iconify-icon>
          </div>
          <input type="password" className="auth-input" />
        </div>
        <div className="my-3">
          <button className="border-2 border-white rounded-xl flex items-center justify-between px-8 h-16 w-full text-xl text-white">
            <div className="font-medium">Sign up with Facebook</div>
            <span className="text-2xl">
              <iconify-icon icon="entypo-social:facebook"></iconify-icon>
            </span>
          </button>
        </div>
        <div className="text-white font-medium text-center">

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
