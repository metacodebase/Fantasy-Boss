
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Left Side - Fixed Image Section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center fixed left-0 top-0 h-screen overflow-hidden">
       <div className="auth-background">
       <div>
          <img src="/assets/images/logo.svg" className="w-[236px] h-[159px]" alt="auth-background" />
       </div>
       <div className="flex flex-col gap-8">
        <h4 className="text-yellow font-bold text-4xl">Fantasy Like a Boss</h4>
        <div className="text-white font-medium text-lg mt-6">
          FantasyBoss is the ultimate fantasy sports experience.<br /> Crafted by enthusiasts, for enthusiasts, Say goodbye to <br /> the hassle and hello to pure fantasy enjoyment.
        </div>
       </div>

       </div>
      </div>

      {/* Right Side - Dynamic Content with Outlet */}
      <div className="w-full lg:w-1/2 lg:ml-auto overflow-y-auto small-bg flex items-center justify-center py-8 px-8 lg:px-12 min-h-screen">
        <div className='w-full max-w-[550px] bg-lightgray  rounded-4xl p-8 z-10'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
