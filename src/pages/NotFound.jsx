import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-6">
      <div className="text-center flex flex-col items-center justify-center max-w-2xl">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-yellow mb-4 tracking-wider">
            404
          </h1>
          <div className="h-1 w-24 bg-linear-to-r from-yellow to-transparent mx-auto mb-6"></div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray text-sm sm:text-base lg:text-lg mb-6 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist
        </p>

        {/* Decorative Icon */}
        <div className="mb-8">
          <iconify-icon
            icon="game-icons:treasure-map"
            style={{ fontSize: '80px' }}
            className="text-yellow opacity-80"
          ></iconify-icon>
        </div>

        {/* Button */}
        <Link
          to="/dashboard"
          className="yellow-button inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white hover:bg-yellow/90 transition"
        >
          <span>Back to Dashboard</span>
          <iconify-icon icon="mdi:arrow-right"></iconify-icon>
        </Link>

     
      </div>
    </div>
  )
}

export default NotFound
