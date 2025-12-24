import "./steps.css"

const Step2LeagueName = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleNameChange = (e) => {
    updateLeagueData("leagueName", e.target.value)
  }
   const currentLeagues = [
    {
      id: 1,
      name: "Toms Game",
      description: "Draft strategy to beat Ton...",

    },
    {
      id: 2,
      name: "Roms Stuff",
      description: "Roms does things with ppl...",
    
    },
    {
      id: 3,
      name: "Tiger Balm",
      description: "Eye of the tiger baby",
    
    },
    {
      id: 4,
      name: "Tiger Balm",
      description: "Eye of the tiger baby",

    },
    
  ]

  const handleSubmit = () => {
    if (leagueData.leagueName.trim()) {
      onNext()
    }
  }

  return (
    <div className="step-container">
      <div className="step-header">
        <button onClick={onBack} className="btn-back">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h4 className="text-2xl font-bold text-white">League Setup</h4>
    <div className="placeholder"></div>
      </div>

      <div className="step-content">
        <div className="mb-6">
          <label className="text-lg font-medium text-gray">League Name</label>
          <input
            type="text"
            value={leagueData.leagueName}
            onChange={handleNameChange}
            className="league-input"
          />
        </div>
        <div className="font-medium text-white">Name your league to get started and select an option below to start a league from scratch or clone an existing set up.</div>

         <div className=" flex flex-col gap-3 bg-lightgray border border-secondgray rounded-[10px] p-4 mt-5">
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center h-7 w-7 rounded-full bg-white text-maindark text-2xl">
                <iconify-icon icon="ic:baseline-plus"></iconify-icon>
              </button>
                <div className="font-medium text-white mb-1">
                 Create a League and pick your settings to get started
                </div>
            </div>
            <button onClick={handleSubmit} className="yellow-button w-full h-[52px]" disabled={!leagueData.leagueName.trim()}>
            CREATE
            </button>
          
           </div>

        <div className="divider text-white">or</div>

          <div className="bg-lightgray rounded-[18px] mt-4">
            <div className=" mb-6">
              <h4 className="text-white text-xl lg:text-2xl font-semibold  uppercase">Copy an Existing League</h4>
            </div>

            {/* Leagues List */}
            <div className="space-y-3">
              {currentLeagues.map((league) => (
                <div
                  key={league.id}
                  className="flex items-center justify-between gap-4 bg-linear-to-b from-[#2E2E2E] to-[#191818] rounded-xl p-4  transition-all"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div><img src="/assets/images/sheild.png" className="w-10" alt="sheild" /></div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{league.name}</h4>
                      <p className="text-gray text-sm">{league.description}</p>
                    </div>
                  </div>
                  <button className="yellow-button h-9 w-[82px]">COPY</button>
                </div>
              ))}
            </div>
          </div>
      </div>

    </div>
  )
}

export default Step2LeagueName
