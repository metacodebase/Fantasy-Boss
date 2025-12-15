import { Link } from "react-router-dom"

const Forgotpassword = () => {

  return (
     <div>
      <div className="flex items-center justify-center mb-12">
    
        <h6 className="font-bold text-2xl">Forgot Password</h6>
     
      </div>

      <form className="flex flex-col gap-6" >
        <div>
          <div className="flex items-center justify-between md:text-xl text-gray">
            <div className="font-medium">Email</div>
          </div>
          <input type="email" className="auth-input" />
        </div>
        <button className="yellow-button mt-5">Send Otp</button>
          <div className="text-whtie font-medium text-center lg:text-[16px]">

          By continuing, you agree to the FantasyBoss <br className="hidden lg:block"/> <Link className="text-[#FAAF16]" to="/terms-of-service">Terms of Service</Link> and acknowledge that you have read our <Link className="text-[#FAAF16]" to="/privacy-policy">Privacy Policy</Link>.
          </div>

      </form>
   
    </div>
  )
}

export default Forgotpassword
