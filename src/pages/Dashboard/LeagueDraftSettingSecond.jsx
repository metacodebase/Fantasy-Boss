import { Switch } from "antd"

const LeagueDraftSettingSecond = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
           Draft Settings - Options
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848]">
            <span className="text-white text-sm md:text-base font-medium">Cancel</span>
          </div>
          <button className="yellow-button py-2! px-4! text-sm md:text-base!">
            Save Changes
          </button>
        </div>
      </div>
      <div className="font-medium text-xl text-[#ff0000] mb-4">
        DO NOT INCLUDE: please note, the Draft Options shouldn’t be allowed to be changed 30 minutes of draft settings
      </div>
      {/* draft time */}
      <div className="bg-lightgray p-5 rounded-[18px]">
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3">
            <div className="font-semibold text-lg mb-4">
                Draft Time
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-[#050608] rounded-md border h-[74px] w-full border-dashed border-yellow flex items-center justify-center text-white">NOT SET</button>
                <button className="bg-[#050608] rounded-md border h-[74px] w-full border-yellow flex items-center justify-center text-white gap-4">
                    <span className="bg-[#3B3B3B] h-10 w-10 text-[#C0A172] text-2xl rounded-md flex items-center justify-center">
                    <iconify-icon icon="mdi:calendar-month"></iconify-icon>
                    </span> Set Time</button>
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
              Draft Type
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">snake</button>
                <button className="yellow-outline-button h-10 text-base!">Linear</button>
          
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-1">
                  Third Round Reversal?
            </div>
            <div className="font-medium text-base mb-1">
                  Reverses the direction of the snake draft starting from the third round
            </div>
            <div className="font-medium text-base mb-4 text-[#FF0000]">
                NOTE TO DEV:  ONLY APPEARS IF SNAKE IS SELECTED. 
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">yes</button>
                <button className="yellow-outline-button h-10 text-base!">no</button>
          
            </div>
        </div>
             <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
            Available Players to draft
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">All</button>
                <button className="yellow-outline-button h-10 text-base!">ROOKIES</button>
                <button className="yellow-outline-button h-10 text-base!">VETS</button>
          
            </div>
        </div>
             <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
        Include Minor League Player In Pool?
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">YES</button>
                <button className="yellow-outline-button h-10 text-base!">NO</button>
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
                 Time Per Pick
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">No</button>
                <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base!">10</button>
                <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base!">30</button>
                <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base!">60</button>
                <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base!">1.5</button>
                <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base!">2</button>
               
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
            CPU Auto Pick?
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
             <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
        Undrafted Players Go TO:
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">WAIVERS</button>
                <button className="yellow-outline-button h-10 text-base!">FREE AGENTS</button>
            </div>
        </div>
             <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
           Player Sorting?
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
             <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
         Allow Trades During Draft?
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
             <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
       Override Invite Capacity?
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
         <div className=" pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
        Undrafted Players Go TO:
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-10 text-base!">RESET</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LeagueDraftSettingSecond
