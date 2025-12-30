const Step1JoinLeague = ({ joinData, updateJoinData, onNext, onClose }) => {
  return (
    <div className="">
      {/* Header */}
           <div className="flex items-center justify-between my-5">
            <div className="w-6"></div>
                        <h2 className="text-center font-bold text-2xl">Join a League</h2>
                 <button onClick={onClose} className=" text-white w-6 text-2xl">
                   <iconify-icon icon="gridicons:cross"></iconify-icon>
                 </button>
        </div>

      {/* Modal Body */}
      <div className="">
        
        {/* Draft Summary Section */}
        <div>
          <h3 className="font-bold text-xl text-white my-5">Draft Summary</h3>
          
          {/* Draft Time & Type Row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
              <div className="lg:text-lg text-white mb-1">Draft Time</div>
              <p className="font-medium text-[#C9A621]">Not Set!</p>
            </div>
            <div>
              <div className="lg:text-lg text-white mb-1">Draft Type</div>
              <p className="font-medium text-gray">Snake</p>
            </div>
          </div>

          {/* Time per Pick & Rounds Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="lg:text-lg text-white mb-1">Time per Pick</div>
              <p className="font-medium text-gray">2 min</p>
            </div>
            <div>
              <div className="lg:text-lg text-white mb-1">Rounds</div>
              <p className="font-medium text-gray">15</p>
            </div>
          </div>
        </div>

        {/* League Summary Section */}
        <div>
          <h3 className="font-bold text-xl text-white my-5">League Summary</h3>
          
          {/* Teams & Draft Type Row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-2">
              <div className="lg:text-lg text-white mb-1"># Teams</div>
              <p className="font-medium text-gray">10 (6)</p>
            </div>
            <div>
              <div className="lg:text-lg text-white mb-1">Draft Type</div>
              <p className="font-medium text-gray">Snake</p>
            </div>
          </div>

          {/* Team Info */}
          <div className="mb-4">
            <div className="lg:text-lg text-white mb-1">Team</div>
            <p className="font-medium text-gray text-sm">
              1QB, 2RB, 3WR, 1TE, 2FLEX, (W/R/T), 1K, 1DEF, 5BN
            </p>
          </div>

          {/* Team Playoffs Row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="lg:text-lg text-white mb-1">Team Playoffs</div>
              <p className="font-medium text-gray">2 min</p>
            </div>
            <div>
              <div className="lg:text-lg text-white mb-1">Team Playoffs</div>
              <p className="font-medium text-gray">6, Starts Week 15</p>
            </div>
          </div>
        </div>

        {/* Scoring Summary Section */}
        <div>
          <h3 className="font-bold text-xl text-white my-5">Scoring Summary</h3>
          
          {/* Scoring Type */}
          <div className="mb-4">
            <div className="lg:text-lg text-white mb-1">Scoring</div>
            <p className="font-medium text-gray">Fantasy Boss Standard</p>
          </div>

          {/* Details */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Details</div>
            <div className="space-y-1.5 text-sm text-gray-300">
              <p>ALL IDs (QB, RB, etc) - 6pt</p>
              <p>Passing Yards - 25yards = 1pt</p>
              <p>Rushing & Receiving Yards - 0.1pt per yard</p>
              <p>Receptions (PPR) - 1pt</p>
              <p>Field Goals - 0.1 per yard, minimum 3pt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="mt-6">
        <button 
          onClick={onNext} 
          className="yellow-button w-full h-[52px]"
        >
          Pay & Join League
        </button>
      </div>
    </div>
  );
};

export default Step1JoinLeague;