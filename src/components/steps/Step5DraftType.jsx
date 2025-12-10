import "./steps.css"

const Step5DraftType = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectDraft = (type) => {
    updateLeagueData("draftType", type)
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
         <h3 className="text-white text-[32px] font-bold text-center">Draft Type</h3>
          <div className="flex justify-center my-6">
           <img src="/assets/images/draft-type.png" className="w-44" alt="draft-type" />
          </div>
          <p className="text-white text-[20px] mb-5 text-center">  Curved, straight, or the biggest wallet. They&apos;re all good options. Just ask your mom.</p>
        </div>

        <div className="draft-options">
          {/* Snake Draft */}
          <button
            onClick={() => handleSelectDraft("snake")}
            className={`draft-option ${leagueData.draftType === "snake" ? "active" : ""}`}
          >
            <div className="draft-icon">
            <iconify-icon icon="mdi:chart-snakey"></iconify-icon>
            </div>
            <span>SNAKE</span>
          </button>

          {/* Linear Draft */}
          <button
            onClick={() => handleSelectDraft("linear")}
            className={`draft-option ${leagueData.draftType === "linear" ? "active" : ""}`}
          >
            <div className="draft-icon ">
          <iconify-icon icon="streamline:graph-bar-decrease"></iconify-icon>
            </div>
            <span>LINEAR</span>
          </button>

          {/* Auction Draft */}
          <button
            onClick={() => handleSelectDraft("auction")}
            className={`draft-option ${leagueData.draftType === "auction" ? "active" : ""}`}
          >
            <div className="draft-icon ">
             <iconify-icon icon="ri:auction-line"></iconify-icon>
            </div>
            <span>AUCTION</span>
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

export default Step5DraftType
