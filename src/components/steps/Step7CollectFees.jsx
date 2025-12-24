import "./steps.css"

const Step7CollectFees = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectFees = (collectFees) => {
    updateLeagueData("collectFees", collectFees)
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
         <h3 className="text-white text-2xl lg:text-[32px] font-bold text-center">Use FantasyBoss to collect League fees?</h3>
          <div className="flex justify-center my-6">
           <img src="/assets/images/collect.png" className="w-64" alt="collect fees" />
          </div>
          <p className="text-white lg:text-[20px] mb-5 text-center">We're way more trustworthy than your cousin Vinny. And we break less cookies.</p>
        </div>

        <div className="options-flex">
          {/* Yes Option */}
          <button
            onClick={() => handleSelectFees(true)}
            className={`type-option extra-type-opition ${leagueData.collectFees === true ? "active" : ""}`}
          >
            <img src="/assets/images/dollar.png" className="w-20" alt="dollar" />
            <button className="yellow-button h-[32px] w-[140px] mt-4">YES</button>
          </button>

          {/* No Option */}
          <button
            onClick={() => handleSelectFees(false)}
            className={`type-option extra-type-opition ${leagueData.collectFees === false ? "active" : ""}`}
          >
            <img src="/assets/images/box.png" className="w-20" alt="box" />

            <button className="yellow-outline-button h-[32px] w-[140px] mt-4">NO</button>
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

export default Step7CollectFees
