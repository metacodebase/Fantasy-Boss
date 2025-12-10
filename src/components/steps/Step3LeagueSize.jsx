import "./steps.css"

const Step3LeagueSize = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const sizes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 32]

  const handleSelectSize = (size) => {
    updateLeagueData("leagueSize", size)
    setTimeout(onNext, 300) // Small delay for visual feedback
  }

  return (
    <div className="step-container">
     <div className="step-header">
        <button onClick={onBack} className="btn-back">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h4 className="text-2xl font-bold text-white">League Settings</h4>
    <div className="placeholder"></div>
      </div>

      <div className="step-content">
        <div className="">
         <h3 className="text-white text-[32px] font-bold text-center">League Size</h3>
          <div className="flex justify-center my-6">
           <img src="/assets/images/league-size.png" className="w-44" alt="league-size" />
          </div>
          <p className="text-white text-[20px] mb-5 text-center">We&apos;d say size doesn&apos;t matter, but we&apos;d be lying.</p>
        </div>

        <div className="size-grid">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSelectSize(size)}
              className={`size-button ${leagueData.leagueSize === size ? "active" : ""}`}
            >
              {size}
            </button>
          ))}
        </div>
      <div className="flex justify-center mt-4">
        <button onClick={onBack} className="bg-transparent border-0 text-yellow">
          Back
        </button>
      </div>
      </div>

    </div>
  )
}

export default Step3LeagueSize
