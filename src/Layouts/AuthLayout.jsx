
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex overflow-hidden">
      {/* Left Side - Fixed Image Section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-secondary rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          {/* Logo & Title Section */}
          <div className="text-center mb-8">
            <div className="inline-block bg-accent rounded-full p-3 mb-6">
              <svg className="w-12 h-12 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-accent mb-2">FANTASYBOSS</h1>
            <p className="text-primary-200 text-sm uppercase tracking-wider">Fantasy Like a Boss</p>
          </div>

          {/* Description */}
          <div className="text-center max-w-sm">
            <p className="text-primary-100 text-lg leading-relaxed">
              FantasyBoss is the ultimate fantasy sports destination. 
              Crafted by enthusiasts, for enthusiasts. Say goodbye to the mundane and hello to pure fantasy enjoyment.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="relative z-10 text-center text-primary-300 text-xs">
          <p>&copy; 2025 FantasyBoss. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Dynamic Content with Outlet */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-y-auto overflow-x-hidden">
        <div className="w-full max-w-md py-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
