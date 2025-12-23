import { Tabs } from "antd"
import { useState } from "react"
import "./TradeZone.css"

const TradeZone = () => {
  const [activeTab, setActiveTab] = useState('1')

  const proposeTradeContent = (
    <div>
      <div className="flex items-center justify-between gap-24">
        {/* Left Side - Your Trade */}
        <div className="flex flex-col gap-4 w-full">
          {/* Player Card */}
          <div className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-4">
            <img src="/assets/images/person-big.png" alt="Lamar Jackson" className="h-[157px] w-[181px]" />
            <div className="">
              <p className="font-medium text-white">Lamar Jackson</p>
              <div className=" flex items-center gap-2 mt-2">
                <button className="bg-[#004B8B] rounded-full h-[33px] w-[70px] text-white flex items-center justify-center text-sm font-bold">QB</button>
                <div className="text-yellow text-sm font-semibold">Team 7</div>
              </div>
            </div>
          </div>
          
         
       
        </div>
        {/* Equals Sign */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 text-2xl text-white">
          <iconify-icon icon="bx:transfer-alt"></iconify-icon>
        </div>

        {/* Right Side - Their Trade */}
         <div className="flex flex-col gap-4 w-full">
          {/* Player Card */}
          <div className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-4">
            <img src="/assets/images/person-big.png" alt="Lamar Jackson" className="h-[157px] w-[181px]" />
            <div className="">
              <p className="font-medium text-white">Lamar Jackson</p>
              <div className=" flex items-center gap-2 mt-2">
                <button className="bg-[#004B8B] rounded-full h-[33px] w-[70px] text-white flex items-center justify-center text-sm font-bold">QB</button>
                <div className="text-yellow text-sm font-semibold">Team 7</div>
              </div>
            </div>
          </div>
          
          {/* Select Player Button */}
      
        </div>
      </div>
      <div className="flex items-center justify-between gap-24 mt-6">
         <button className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-2 justify-center items-center text-white mt-2 border border-[#404040] text-xl font-medium w-full">
            <iconify-icon icon="mdi:plus"></iconify-icon>
            Select Player
          </button>
        {/* Equals Sign */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 text-2xl text-white">
          <iconify-icon icon="bx:transfer-alt"></iconify-icon>
        </div>

        {/* Right Side - Their Trade */}
          <button className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-2 justify-center items-center text-white mt-2 border border-[#404040] text-xl font-medium w-full">
            <iconify-icon icon="mdi:plus"></iconify-icon>
            Select Player
          </button>
      </div>

      {/* Action Buttons */}
       <div className="flex flex-col gap-4 justify-center mt-12">
            <button  className="yellow-outline-button h-[52px]">
              Add Trade
            </button>
            <button  className="yellow-button h-[52px]">
              View Trade Summary
            </button>
          </div>
    </div>
  )

  const tradingBlockContent = (
   <div>
      <div className="flex items-center justify-between gap-24">
        {/* Left Side - Your Trade */}
        <div className="flex flex-col gap-4 w-full">
          {/* Player Card */}
          <div className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-4">
            <img src="/assets/images/person-big.png" alt="Lamar Jackson" className="h-[157px] w-[181px]" />
            <div className="">
              <p className="font-medium text-white">Lamar Jackson</p>
              <div className=" flex items-center gap-2 mt-2">
                <button className="bg-[#004B8B] rounded-full h-[33px] w-[70px] text-white flex items-center justify-center text-sm font-bold">QB</button>
                <div className="text-yellow text-sm font-semibold">Team 7</div>
              </div>
            </div>
          </div>
          
         
       
        </div>
        {/* Equals Sign */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 text-2xl text-white">
          <iconify-icon icon="bx:transfer-alt"></iconify-icon>
        </div>

        {/* Right Side - Their Trade */}
         <div className="flex flex-col gap-4 w-full">
          {/* Player Card */}
          <div className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-4">
            <img src="/assets/images/person-big.png" alt="Lamar Jackson" className="h-[157px] w-[181px]" />
            <div className="">
              <p className="font-medium text-white">Lamar Jackson</p>
              <div className=" flex items-center gap-2 mt-2">
                <button className="bg-[#004B8B] rounded-full h-[33px] w-[70px] text-white flex items-center justify-center text-sm font-bold">QB</button>
                <div className="text-yellow text-sm font-semibold">Team 7</div>
              </div>
            </div>
          </div>
          
          {/* Select Player Button */}
      
        </div>
      </div>
      <div className="flex items-center justify-between gap-24 mt-6">
         <button className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-2 justify-center items-center text-white mt-2 border border-[#404040] text-xl font-medium w-full">
            <iconify-icon icon="mdi:plus"></iconify-icon>
            Select Player
          </button>
        {/* Equals Sign */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 text-2xl text-white">
          <iconify-icon icon="bx:transfer-alt"></iconify-icon>
        </div>

        {/* Right Side - Their Trade */}
          <button className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[14px] p-5 flex flex-col gap-2 justify-center items-center text-white mt-2 border border-[#404040] text-xl font-medium w-full">
            <iconify-icon icon="mdi:plus"></iconify-icon>
            Select Player
          </button>
      </div>

      {/* Action Buttons */}
       <div className="flex flex-col gap-4 justify-center mt-12">
            <button  className="yellow-outline-button h-[52px]">
              Add Trade
            </button>
            <button  className="yellow-button h-[52px]">
              View Trade Summary
            </button>
          </div>
    </div>
  )

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Trade Zone - Propose Trade</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
            6 team PPR • 2024 Season
          </p>
        </div>
      </div>

      <div className="bg-lightgray p-5 rounded-[18px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 pb-6 border-b border-[rgba(255,255,255,0.24)]">
          <div>
            <h5 className="font-semibold text-lg text-white">Marks League</h5>
            <p className="text-gray text-sm md:text-base mt-1">
              6-Team PPR • 2021
            </p>
          </div>
          <div className="flex gap-1 flex-col items-end">
            <div className="text-gray">Current Team</div>
            <div className="text-gray">Team 7 • Lamar Jackson</div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          className="trade-zone-tabs"
          items={[
            {
              key: '1',
              label: 'PROPOSE TRADE',
              children: proposeTradeContent,
            },
            {
              key: '2',
              label: 'TRADING BLOCK',
              children: tradingBlockContent,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default TradeZone
