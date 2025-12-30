import { Switch } from "antd"

const KeeperSettings = () => {
  return (
    <div>
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold lg:text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
             League - Keeper Settings
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
            <h4 className="font-semibold text-lg lg:text-2xl mb-4 text-white">Keeper Settings Configuration</h4>
  

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                     # of Keepers Per Team
                    </div>
                    <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
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
                      Initial Keeper Contract Duration (years)
                    </div>
                    <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">6</button>
                    </div>
        </div>
             <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex items-center justify-between">
            <div className="text-white">
      Allow Contract Extensions?
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                      Max Keeper Contact Duration (years)
                    </div>
                     <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">5</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">6</button>
                    </div>
        </div>

      

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
           <div className="font-medium">
            After Initial season, contract cost increases by:
           </div>
           <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
           <p className="text-gray">Round (or dollars if auction league)</p>
           <div className="h-8 lg:h-12 w-20 border border-yellow rounded-md flex items-center justify-center">
             1
           </div>
           </div>
           <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between mt-3">
           <p className="text-gray">Percent (in rounds or dollars)</p>
           <div className="h-8 lg:h-12 w-20 border border-yellow rounded-md flex items-center justify-center">
            25
           </div>
           </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
          <div className="font-semibold lg:lg:text-lg mb-3">
            Date Keepers to be declared by
          </div>
              <button className="bg-[#050608] rounded-md border w-full md:w-xl text-sm lg:text-base h-12 lg:h-[74px]  border-yellow flex items-center px-4 text-white gap-4">
                  <span className="bg-[#3B3B3B]  h-6 lg:h-10 w-8 lg:w-10 text-[#C0A172] lg:text-2xl rounded-md flex items-center justify-center">
                    <iconify-icon icon="mdi:calendar-month"></iconify-icon>
                  </span>
                  <div className="h-10 w-0.5 bg-secondgray"></div>
                  <div>
                    <div className="text-start text-sm text-gray">Start:</div>
                    <div className="text-sm font-medium">Week 1</div>
                  </div>
              </button>
        </div>


 

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="font-medium">
           Loose Keeper Status When...
           </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-gray">
                    Dropped
                         </div>
              <div><Switch className="custom-switch" defaultChecked  /></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-gray">
                    Traded
                         </div>
              <div><Switch className="custom-switch" defaultChecked  /></div>
            </div>
        </div>

 

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       # of Playoff Teams
                    </div>
                    <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">1</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">2</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">3</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">4</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
            <div className="text-white mb-4">
            Can Waivers pickups be kept?
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] px-4 lg:h-10 lg:w-32 rounded-full text-base! text-black font-semibold">Yes</button>
                <button className="border border-yellow-500 px-4 lg:h-10 lg:w-32 rounded-full text-base! font-semibold">No</button>
             
            </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
                    <div className="text-white">
                       Initial Cost for waiver keepers ($)
                    </div>
                    <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
                        <button className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] h-[38px] w-12 rounded-[5px] text-base! text-black">$5</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">$10</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">$20</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">$30</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">$40</button>
                        <button className="bg-transparent border border-secondgray h-[38px] w-12 rounded-[5px] text-base! text-white">$50</button>
                    </div>
        </div>

        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex items-center justify-between">
            <div className="text-white">
          Require All players in a keeper trade to be kept
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex items-center justify-between">
            <div className="text-white">
          Allow Offseason Keeper trdaes
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
            <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
              <div className="font-semibold lg:text-lg mb-4">
               Off Season Trade Dates
              </div>
              <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
                <button className="bg-[#050608] rounded-md border text-sm lg:text-base h-12 lg:h-[74px] w-full border-yellow flex items-center px-4 text-white gap-4">
                  <span className="bg-[#3B3B3B] h-6 lg:h-10 w-8 lg:w-10 text-[#C0A172] lg:text-2xl rounded-md flex items-center justify-center">
                    <iconify-icon icon="mdi:calendar-month"></iconify-icon>
                  </span>
                  <div className="h-10 w-0.5 bg-secondgray"></div>
                  <div>
                    <div className="text-start text-sm text-gray">Start:</div>
                    <div className="text-sm font-medium">1/14</div>
                  </div>
                </button>
                <button className="bg-[#050608] rounded-md border text-sm lg:text-base h-12 lg:h-[74px] w-full border-yellow flex items-center px-4 text-white gap-4">
                  <span className="bg-[#3B3B3B] h-6 lg:h-10 w-8 lg:w-10 text-[#C0A172] lg:text-2xl rounded-md flex items-center justify-center">
                    <iconify-icon icon="mdi:calendar-month"></iconify-icon>
                  </span>
                  <div className="h-10 w-0.5 bg-secondgray"></div>
                  <div>
                    <div className="text-start text-sm text-gray">End:</div>
                    <div className="text-sm font-medium">9/1</div>
                  </div>
                </button>
              </div>
            </div>

       
    </div>
    </div>
  )
}

export default KeeperSettings
