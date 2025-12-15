

import { Link } from "react-router-dom"
import OTPInput from "../../components/otp-input";
import { useState } from "react";

const Verification = () => {
      const [loading, setLoading] = useState(false)
  
  const handleVerify = (code) => {
    if (code.length === 4) {
      setLoading(true)
      setTimeout(() => {
      
        setLoading(false)
      }, 500)
    }
  }
  return (
   <div>
      <div className="flex items-center justify-center mb-12">
       
        <h6 className="font-bold text-2xl">Verification</h6>
  
      </div>
     
      
       
      
      <form className="flex flex-col gap-6" >
     <h6>
           For security, please enter the code we <br className="hidden lg:block" />
           sent to the email you provided
           </h6>



     
             <OTPInput
            length={4}
            onComplete={handleVerify}
            onChange={(value) => console.log("OTP:", value)}
            disabled={loading}
          />
   



        <Link to="/auth/forgot-password" className="text-yellow">Forgot password?</Link>
        
       

        <button className="yellow-button">Next</button>
        <div className="text-yellow text-center uppercase">
             Need an account?
        <Link to="/auth/signup" > Sign UP!</Link>

        </div>
   
    


      </form>
   
    </div>
  )
}

export default Verification
