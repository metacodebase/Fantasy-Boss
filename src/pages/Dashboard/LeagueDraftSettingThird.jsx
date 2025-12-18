
const LeagueDraftSettingThird = () => {
  const teams = [
    { id: 1, name: "Team 1" },
    { id: 2, name: "Team 2" },
    { id: 3, name: "Team 3" },
    { id: 4, name: "Team 4" },
    { id: 5, name: "Team 5" },
    { id: 6, name: "Team 6" },
    { id: 7, name: "Team 7" },
    { id: 8, name: "Team 8" },
    { id: 9, name: "Team 9" },
    { id: 10, name: "Team 10" },
  ];

  return (
    <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
          Draft - Edit Draft Order
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
      <div className="bg-lightgray p-5 rounded-[18px] mt-4">
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-base md:text-lg text-white">Draft Order</h4>
          <p className="text-gray text-sm mt-1">
      Drag teams to change the draft order or shuffle using the button.
          </p>
        </div>
        <div className="flex items-center gap-3">
    
          <button className="bg-yellow w-11 h-11 flex items-center justify-center text-black text-2xl md:text-base! rounded-lg">
          <iconify-icon icon="bx:transfer-alt"></iconify-icon>
          </button>
        </div>
      </div>
          
          {teams.map((team) => (
            <div key={team.id} className="border border-yellow rounded-xl p-3 flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-[42px] h-[42px] bg-[#3B3B3B] rounded-lg flex items-center justify-center shrink-0 text-[#C0A172] text-3xl">
                  <iconify-icon
                    icon="mdi:account"
                    className=""
                  ></iconify-icon>
                </div>
                <div className="text-white">{team.name}</div>
              </div>
              <div><iconify-icon icon="el:lines"></iconify-icon></div>
            </div>
          ))}
      </div>

   
     
    </div>
  )
}

export default LeagueDraftSettingThird
