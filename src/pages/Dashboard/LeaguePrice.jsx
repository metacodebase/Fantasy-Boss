import { Modal } from "antd"
import { useState } from "react";

const LeaguePrice = () => {
      const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    
  return (
    <div>
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
       Draft Settings - Main Prize Payout
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
     
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
            Enable Side Prize Pool
            </div>
              <div className="border border-yellow rounded-md h-12 w-[102px] flex items-center justify-center text-xl font-medium">
                $4
              </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
          Side Pool Buy In
            </div>
              <button onClick={() => setSettingsModalOpen(true)}  className="border border-yellow rounded-md h-12 w-[102px] flex items-center justify-center text-xl font-medium">
                $25
              </button>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
          Side Pool Buy In
            </div>
              <div className="border border-yellow rounded-md h-12 w-[102px] flex items-center justify-center text-xl font-medium">
                $125
              </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
          Side Pool Buy In
            </div>
              <div className="border border-yellow rounded-md h-12 w-[102px] flex items-center justify-center text-xl font-medium">
                $25
              </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
          Side Pool Buy In
            </div>
              <div className="border border-yellow rounded-md h-12 w-[102px] flex items-center justify-center text-xl font-medium">
                $125
              </div>
        </div>
      </div>
         <Modal
        open={settingsModalOpen}
        onCancel={() => setSettingsModalOpen(false)}
        footer={null}
        centered
        width={550}
        className="settings-modal"
        closeIcon={
          null
        }
       
      >
               <div className="flex items-center justify-between my-4">
                    <div className="w-6"></div>
                            <h2 className="text-center font-bold text-2xl">1st Place</h2>
                    <button onClick={() => setSettingsModalOpen(false)} className=" text-white w-6 text-2xl">
                    <iconify-icon icon="gridicons:cross"></iconify-icon>
                    </button>
                </div>
                <div className="border-b border-yellow pb-4 text-white text3xl lg:text-5xl text-center font-semibold mb-4">
                    $25
                </div>
                <button className="yellow-button h-[52px] w-full">Done</button>
       
      </Modal>
    </div>
  )
}

export default LeaguePrice
