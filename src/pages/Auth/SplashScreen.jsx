import { Link } from "react-router-dom"

const SplashScreen = () => {
  return (
    <div>
     <Link to="/auth/login" className="yellow-button w-full mb-6 block text-center">SIGN IN</Link>
        <div className="text-yellow text-center uppercase">
         Don’t have an account?
        <Link to="/auth/signup" > Sign UP!</Link>

        </div>
   
    </div>
  )
}

export default SplashScreen
