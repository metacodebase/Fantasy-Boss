import { Switch } from "antd"

const PositionLimits = () => {
  return (
    <div>
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
                 Draft Settings - Roster & Waivers
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
      <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div>
                <div className="font-semibold text-lg mb-1">
                  Use Waivers?
                </div>
                <p className="text-sm font-medium text-gray">
                    If not, players are always free agents
                </p> 
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
   
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="font-semibold text-lg mb-1">
            Waiver Order
            </div>
            <p className="text-sm font-medium text-gray mb-4">
                 Choose how waiver priority is determined.
                </p> 
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">Rolling</button>
                <button className="yellow-outline-button h-10 text-base!">Reverse</button>
                <button className="yellow-outline-button h-10 text-base!">FAAB</button>
          
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="font-semibold text-lg mb-1">
            After Game Starts, Players Clear Waiver On
            </div>
            <p className="text-sm font-medium text-gray mb-4">
                 Pick which day players move from waivers to free agency.
                </p> 
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">None</button>
                <button className="yellow-outline-button h-10 text-base!">Tue</button>
                <button className="yellow-outline-button h-10 text-base!">Wed</button>
                <button className="yellow-outline-button h-10 text-base!">ThuRS</button>
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="font-semibold text-lg mb-1">
          Time On After Drop
            </div>
            <p className="text-sm font-medium text-gray mb-4">
                How long dropped players stay on waivers.
                </p> 
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">1 Day</button>
                <button className="yellow-outline-button h-10 text-base!">2 Days</button>
                <button className="yellow-outline-button h-10 text-base!">3 Days</button>
                <button className="yellow-outline-button h-10 text-base!">4 Days</button>
                <button className="yellow-outline-button h-10 text-base!">5 Days</button>
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="font-semibold text-lg mb-1">
          Max Moves Per Week
            </div>
            <p className="text-sm font-medium text-gray mb-4">
                Limit how many player adds/drops a team can make each week.
                </p> 
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">1</button>
                <button className="yellow-outline-button h-10 text-base!">2</button>
                <button className="yellow-outline-button h-10 text-base!">3</button>
                <button className="yellow-outline-button h-10 text-base!">4</button>
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="font-semibold text-lg mb-1">
          Max Moves Per Season
            </div>
            <p className="text-sm font-medium text-gray mb-4">
               Cap total waiver and free agent moves for the full season.
                </p> 
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">2</button>
                <button className="yellow-outline-button h-10 text-base!">10</button>
                <button className="yellow-outline-button h-10 text-base!">20</button>
                <button className="yellow-outline-button h-10 text-base!">30</button>
                <button className="yellow-outline-button h-10 text-base!">40</button>
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div>
                <div className="font-semibold text-lg mb-1">
                  Prevent Waiver Churn
                </div>
                <p className="text-sm font-medium text-gray">
                    Recently added/dropped players go back to free agency instead of waivers.
                </p> 
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div>
                <div className="font-semibold text-lg mb-1">
                  Prevent Top Players From Being Dropped
                </div>
                <p className="text-sm font-medium text-gray">
                    Lock highly-ranked players from accidental drops.
                </p> 
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div>
                <div className="font-semibold text-lg mb-1">
                  Prevent Bench Drops After Games Start
                </div>
                <p className="text-sm font-medium text-gray">
                    Protect players in active games from being dropped.
                </p> 
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div>
                <div className="font-semibold text-lg mb-1">
                  Lock All Free Agent And Waiver Moves
                </div>
                <p className="text-sm font-medium text-gray">
                    Freeze all roster changes for tis league.
                </p> 
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
      </div>
    </div>
  )
}

export default PositionLimits
