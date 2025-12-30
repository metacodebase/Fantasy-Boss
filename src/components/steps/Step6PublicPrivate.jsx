import "./steps.css"

const Step6PublicPrivate = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectAccess = (isPublic) => {
    updateLeagueData("isPublic", isPublic)
    setTimeout(onNext, 300)
  }

  return (
    <div className="step-container">
      <div className="step-header">
        <button onClick={onBack} className="btn-back">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h4 className="text-xl lg:text-2xl font-bold text-white">League Settings</h4>
    <div className=" flex items-center gap-2">
           <button className="flex items-center justify-center h-6 w-6 rounded-full bg-white text-maindark">
                <iconify-icon icon="ic:baseline-plus"></iconify-icon>
              </button>
              <button className="text-white text-2xl self-center flex"><iconify-icon icon="bi:three-dots-vertical"></iconify-icon></button>
    </div>
      </div>

      <div className="step-content">
          <div className="">
         <h3 className="text-white text-2xl lg:text-[32px] font-bold text-center">Public or Private</h3>
          <div className="flex justify-center my-6">
           <img src="/assets/images/eye.png" className="w-44 lg:w-64" alt="eye" />
          </div>
          <p className="text-white lg:text-[20px] mb-5 text-center">  Let&apos;s face it, some things go on the mantle, others get hidden under the bed where grandma won&apos;t find them.</p>
        </div>
       

        <div className="access-options">
          {/* Private Option */}
          <button
            onClick={() => handleSelectAccess(false)}
            className={`access-option ${leagueData.isPublic === false ? "active" : ""}`}
          >
            <div className="text-3xl lg:text-5xl">
              <iconify-icon icon="mdi:lock-outline"></iconify-icon>
            </div>
            <span className="text-lg lg:text-">PRIVATE</span>
          </button>

          {/* Public Option */}
          <button
            onClick={() => handleSelectAccess(true)}
            className={`access-option ${leagueData.isPublic === true ? "active" : ""}`}
          >
            <div className="text-3xl lg:text-5xl">
              <iconify-icon icon="mdi:lock-open-outline"></iconify-icon>
            </div>
            <span className="text-lg lg:text-">PUBLIC</span>
          </button>
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

export default Step6PublicPrivate
