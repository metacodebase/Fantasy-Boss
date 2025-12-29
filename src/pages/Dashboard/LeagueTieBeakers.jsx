import { Switch } from "antd"

const LeagueTieBeakers = () => {
  return (
    <div>
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
           League Tiebreaker
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
         <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-xl lg:text-2xl">
             Use Tiebreakers
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
        <div className="pb-3 mt-4">
            <div className="font-semibold text-lg mb-1">
                Standings Tiebreakers
                </div>
                <p className="text-gray mb-4">Rank priority from 1st (highest) to 4th (lowest)</p>
            <div className="flex flex-col">
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Most Fantasy Points for season
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Lowest Fantasy Points Against
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Most wins entire season
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Record vs Team tied with
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="] pb-3 mt-4">
            <div className="font-semibold text-lg mb-1">
                Matchup Tiebreakers
                </div>
                <p className="text-gray mb-4">Rank priority from 1st (highest) to 4th (lowest)</p>
            <div className="flex flex-col">
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Best Bench / Reserve Players
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Home Team Wins
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Highest Individual Starter Score
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Highest Individual Starter Score
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Most Offensive + Special Teams TDS
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="pb-3 mt-4">
            <div className="font-semibold text-lg mb-1">
                Playoff Tiebreakers
                </div>
                <p className="text-gray mb-4">Rank priority from 1st (highest) to 5th (lowest)</p>
            <div className="flex flex-col">
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       High Seed
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Record vs Team tied with
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Best Bench vs Reserve Players
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Home Team Wins
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                    </div>
                </div>
                <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       MOST POINTS GAME Over Season
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                    </div>
                </div>
            </div>
        </div>
     
          
      </div>
    </div>
  )
}

export default LeagueTieBeakers
