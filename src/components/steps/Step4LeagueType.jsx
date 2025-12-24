import "./steps.css"

const Step4LeagueType = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectType = (type) => {
    updateLeagueData("leagueType", type)
    setTimeout(onNext, 300)
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
         <h3 className="text-white text-2xl lg:text-[32px] font-bold text-center">League Type</h3>
          <div className="flex justify-center my-6">
           <img src="/assets/images/league-type.png" className="w-32 lg:w-44" alt="league-type" />
          </div>
          <p className="text-white lg:text-[20px] mb-5 text-center">What&apos;s your league type? No judgement.
             At least not where you can hear us.
          </p>
        </div>

        <div className="options-flex">
          {/* Redraft Option */}
          <button
            onClick={() => handleSelectType("redraft")}
            className={`type-option ${leagueData.leagueType === "redraft" ? "active" : ""}`}
          >
            <div className="type-icon">
             <iconify-icon icon="oi:reload"></iconify-icon>
            </div>
            <span>REDRAFT</span>
          </button>

          {/* Keeper Option */}
          <button
            onClick={() => handleSelectType("keeper")}
            className={`type-option ${leagueData.leagueType === "keeper" ? "active" : ""}`}
          >
            <div className="type-icon">
          <iconify-icon icon="game-icons:american-football-helmet"></iconify-icon>
            </div>
            <span>KEEPER</span>
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

export default Step4LeagueType
