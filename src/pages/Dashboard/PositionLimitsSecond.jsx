const PositionLimitsSecond = () => {
  const positions = [
    { id: 1, name: "Quarterback (QB)", startingSpots: 1, totalAllowed: "No Limit" },
    { id: 2, name: "Running Back (RB)", startingSpots: 2, totalAllowed: null },
    { id: 3, name: "Wide Receiver (WR)", startingSpots: 2, totalAllowed: "No Limit" },
    { id: 4, name: "Tight End (TE)", startingSpots: 1, totalAllowed: "No Limit" },
    { id: 5, name: "Kicker (K)", startingSpots: 1, totalAllowed: "No Limit" },
    { id: 6, name: "Defense (DEF)", startingSpots: 1, totalAllowed: null },
    { id: 7, name: "Flex (W/R/T)", startingSpots: 2, totalAllowed: null },
    { id: 8, name: "Flex (W/R)", startingSpots: 0, totalAllowed: null },
    { id: 9, name: "Flex (Rec)", startingSpots: 0, totalAllowed: null },
    { id: 10, name: "Super Flex", startingSpots: 0, totalAllowed: null },
    { id: 11, name: "Bench (BN)", startingSpots: 5, totalAllowed: null },
    { id: 12, name: "IR Spots (IR) (not counted in total)", startingSpots: 3, totalAllowed: null, isRed: true },
  ];

  const idpPositions = [
    { id: 1, name: "Def. Lineman (DL)", startingSpots: 0, totalAllowed: "No Limit" },
    { id: 2, name: "Linebacker (LB)", startingSpots: 0, totalAllowed: "No Limit" },
    { id: 3, name: "Def. Back (DB)", startingSpots: 0, totalAllowed: "No Limit" },
    { id: 4, name: "IDP Flex", startingSpots: 0, totalAllowed: null },
  ];
  return (
    <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
                Draft Settings - Roster & Position Limits
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848]">
            <span className="text-white text-sm md:text-base font-medium">Back</span>
          </div>
          <button className="yellow-button py-2! px-4! text-sm md:text-base!">
            Save 
          </button>
        </div>
      </div>
      <div className="bg-lightgray p-5 rounded-[18px]">
       <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-4">
        <div className="font-semibold text-xl lg:text-2xl">Total Roster Spots: 15</div>
        <span className="bg-[#050608] py-1 px-4 rounded-full text-sm lg:text-base text-center lg:text-start">Include starters + bench (not IR)</span>
       </div>
       <div className="grid lg:grid-cols-3 gap-4 mt-4">
            <div></div>
        <div className="font-semibold text-lg text-gray mx-auto">Starting Spots</div>
        <div className="font-semibold text-lg text-gray text-center lg:text-right lg:ms-auto">Total Allowed</div>
       </div>
       {positions.map((position) => (
         <div key={position.id} className="grid lg:grid-cols-3 gap-4 mt-6">
          <div className={`font-semibold text-lg text-center lg:text-start ${position.isRed ? "text-[#FF0000]" : ""}`}>{position.name}</div>
          <div className="border border-[#E5CD71] bg-[rgba(0,0,0,0.65)] p-1 flex items-center justify-between rounded-4xl w-[200px] mx-auto">
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
               <iconify-icon icon="rivet-icons:minus"></iconify-icon>
              </button>
              <div className="text-lg font-medium">{position.startingSpots}</div>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
               <iconify-icon icon="qlementine-icons:plus-16"></iconify-icon>
              </button>
          </div>
          {position.totalAllowed && (
            <div className="border border-[#E5CD71] bg-[rgba(0,0,0,0.65)] p-1 flex items-center justify-between rounded-4xl w-[200px] lg:ms-auto mx-auto lg:mx-0">
                <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
                 <iconify-icon icon="rivet-icons:minus"></iconify-icon>
                </button>
                <div className="text-lg font-medium">{position.totalAllowed}</div>
                <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
                 <iconify-icon icon="qlementine-icons:plus-16"></iconify-icon>
                </button>
            </div>
          )}
         </div>
       ))}
      <div className="text-xl lg:text-2xl font-medium my-6">
        For Individuals Players on defense (IDP) leagues
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        <div className="text-lg font-semibold text-gray text-center lg:text-start">Defense Positions</div>
        <div className="text-lg font-semibold text-gray text-center">How many starting spots for each?</div>
        <div className="font-semibold text-lg text-gray text-center lg:text-right lg:ms-auto">Total allowed on roster?</div>
      </div>
      {idpPositions.map((position) => (
        <div key={position.id} className="grid lg:grid-cols-3 gap-4 mt-6">
          <div className="font-semibold text-lg text-center lg:text-start">{position.name}</div>
          <div className="border border-[#E5CD71] bg-[rgba(0,0,0,0.65)] p-1 flex items-center justify-between rounded-4xl w-[200px] mx-auto">
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
               <iconify-icon icon="rivet-icons:minus"></iconify-icon>
              </button>
              <div className="text-lg font-medium">{position.startingSpots}</div>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
               <iconify-icon icon="qlementine-icons:plus-16"></iconify-icon>
              </button>
          </div>
          {position.totalAllowed && (
            <div className="border border-[#E5CD71] bg-[rgba(0,0,0,0.65)] p-1 flex items-center justify-between rounded-4xl w-[200px] lg:ms-auto mx-auto lg:mx-0">
                <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
                 <iconify-icon icon="rivet-icons:minus"></iconify-icon>
                </button>
                <div className="text-lg font-medium">{position.totalAllowed}</div>
                <button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f9b816] text-secondgray">
                 <iconify-icon icon="qlementine-icons:plus-16"></iconify-icon>
                </button>
            </div>
          )}
        </div>
      ))}



      </div>
    </div>
  )
}

export default PositionLimitsSecond
