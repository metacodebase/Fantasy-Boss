

const Step3NameTeam = ({ joinData, updateJoinData, onBack, onFinish }) => {
  const handleGetStarted = () => {
    if (joinData.teamName.trim()) {
      onFinish()
    }
  }

  return (
    <div className="step-container">
  <div className="flex items-center justify-between my-5">
        <button onClick={onBack} className="text-white text-3xl">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h4 className="text-2xl font-bold text-white">Welcome</h4>
    <div className="placeholder"></div>
      </div>
         <div className="">
         <h3 className="text-white text-[32px] font-bold text-center">Name Your Team</h3>
          <div className="flex justify-center my-6">
           <img src="/assets/images/ready.png" className="w-64" alt="ready" />
          </div>
          <p className="text-white text-[20px] mb-5 text-center">Now that the money’s on the nightstand, get in there and show ‘em who’s boss. Name your team and get in the game.</p>
        </div>

      <div >
     
       

          <div className="mb-6 flex flex-col gap-1">
          <label className="text-gray text-lg font-medium">Type name</label>

            <input
              type="text"
              value={joinData.teamName}
              onChange={(e) => updateJoinData("teamName", e.target.value)}
              className="league-input"
            />
          </div>
     
      </div>

      <div className="step-footer">
        <button onClick={handleGetStarted}   className="yellow-button w-full h-[52px]" disabled={!joinData.teamName.trim()}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Step3NameTeam
