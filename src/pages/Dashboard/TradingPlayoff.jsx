import { Switch } from "antd"

const TradingPlayoff = () => {
  return (
    <div>
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
              League - Trading & Playoffs
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848]">
            <span className="text-white text-sm md:text-base font-medium">Cancel</span>
          </div>
          <button className="yellow-button py-2! px-4! text-sm md:text-base!">
            Save
          </button>
        </div>
      </div>
    <div className="bg-lightgray p-5 rounded-[18px]">
            <h4 className="font-semibold text-xl lg:text-2xl mb-4 text-white">Trading & Playoffs Configuration</h4>
         <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex items-center justify-between">
            <div className="text-white">
            Allow Trades
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Trade Deadline
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">6</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Trade Deadline
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">6</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Trade Review Time
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="text-white mb-4">
              Trade Veto System
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base! text-black font-semibold">TRADE SNIPER</button>
                <button className="border border-yellow-500 px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base! font-semibold">VETO</button>
                <button className="border border-yellow-500 px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base! font-semibold">NONE</button>
            </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Trade Vote Needed to Veto
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
            <div className="text-white">
            Use Playoffs
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
            <div className="text-white">
            Prevent Non Playoff teams from making moves
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       # of Playoff Teams
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="text-white mb-4">
              How long should each playoff matchup last?
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
                <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base! text-black font-semibold">1 WEEK + FINALS</button>
                <button className="border border-yellow-500 px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base!  font-semibold">1 WEEK + FINALS 2WKS</button>
                <button className="border border-yellow-500 px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base!  font-semibold">2 WEEKS + FINALS</button>
            </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Playoff Start Week
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
            <div className="text-white">
            Playoff Seeding
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>

        <div className="pb-6 mt-4">
            <div className="text-white mb-4">
              Losers Bracket
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
                <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base! text-black font-semibold">NONE</button>
                <button className="border border-yellow-500 px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base!  font-semibold">POOP BOWL</button>
                <button className="border border-yellow-500 px-4 rounded-full h-8 lg:h-10 text-sm lg:text-base!  font-semibold">CONSULTATION BOWL</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TradingPlayoff
