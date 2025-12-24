import "./steps.css"

const Step8LeagueReady = ({ leagueData, onFinish, onBack }) => {
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
      <div className="">
         <h3 className="text-white text-2xl lg:text-[32px] font-bold text-center">Your League is ready!</h3>
          <div className="flex justify-center my-6">
           <img src="/assets/images/ready.png" className="w-64" alt="ready" />
          </div>
          <p className="text-white lg:text-[20px] mb-5 text-center">Bravo! You’ve proven that even the most mundane tasks can be conquered with enough determination. Now get out there and build a team! Or not. Friends can wait, naps are forever.</p>
        </div>

          <div className="flex flex-col gap-2 mb-6 items-center text-xl font-bold text-white">
            <div className="flex items-center gap-2">
              <span className="label">Size:</span>
              <span className="value">{leagueData.leagueSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="label">Type:</span>
              <span className="value">{leagueData.leagueType?.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="label">Draft:</span>
              <span className="value">{leagueData.draftType?.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-2">
             
              <span className="value">{leagueData.isPublic ? "PUBLIC" : "PRIVATE"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="label">Collect Fees:</span>
              <span className="value">{leagueData.collectFees ? "True" : "False"}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <button onClick={() => {}} className="yellow-outline-button h-[52px]">
              CONTINUE SET UP
            </button>
            <button onClick={onFinish} className="yellow-button h-[52px]">
              I'M DONE FOR NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step8LeagueReady
