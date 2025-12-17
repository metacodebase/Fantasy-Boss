import { Col, Modal, Row } from "antd"
import StandingsTable from "../../components/StandingsTable";
import TransactionsList from "../../components/TransactionsList";
import { useState } from "react";

const LeagueCommissionerSecond = () => {
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  
  return (
    <div>
          <div className="flex items-center justify-between mb-4">
        <div>
            <h4 className="font-semibold text-base lg:text-2xl">Marks League</h4>
            <p className="text-gray text-base lg:text-lg font-medium">Draft Dashboard</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848] ">
            <span className="text-white text-base font-medium">Draft Open</span>
            </div>
        </div>
      </div>
      {/* complete setup */}
         <Row gutter={[
                      { xs: 16, sm: 32, md: 22 },
                      { xs: 16, sm: 32, md: 22 },
                    ]} >
                
                 <Col xs={24} lg={16}>
                <div className="border flex flex-col items-center justify-center border-dashed border-yellow rounded-2xl px-3 py-8 h-full">
                  <div className="text-gray text-sm font-medium uppercase mb-4">
                    DRAFT
                  </div>
                  <h2 className="text-yellow text-[16px] md:text-lg font-semibold mb-4">
                    Draft Open
                  </h2>
                  <p className="text-gray text-sm">
                    Complete your league set-up before draft time.
                  </p>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                {/* Action Buttons */}
                <div className="flex flex-col justify-between h-full gap-4 mb-8">
                  {/* Set-up Avatar Button */}
                  <button className="bg-lightgray rounded-2xl border border-[#7B7B7B] px-3 py-5 flex items-center justify-between h-full transition-colors group">
                    <div className="flex items-center gap-2">
                        <div className="w-[42px] h-[42px] bg-[#3B3B3B] rounded-lg flex items-center justify-center shrink-0 text-[#C0A172] text-3xl">
                          <iconify-icon
                            icon="mdi:account"
                            className=""
                          ></iconify-icon>
                        </div>
                        <div className="text-left">
                          <div className="text-white text-sm font-medium mb-0.5">
                            Set-up Avatar
                          </div>
                          <div className="text-gray text-xs">
                            Personalized your team look
                          </div>
                        </div>
                    </div>
                    <div className="text-white text-xl">
                        <iconify-icon icon="lsicon:right-filled"></iconify-icon>
                    </div>
                  </button>

                  {/* Edit Settings Button */}
                  <button onClick={() => setSettingsModalOpen(true)}  className="bg-lightgray  rounded-2xl border border-[#7B7B7B] px-3 py-5 flex items-center justify-between h-full transition-colors group">
                    <div className="flex items-center gap-2">
                        <div className="w-[42px] h-[42px] bg-[#3B3B3B] rounded-lg flex items-center justify-center shrink-0 text-[#C9A621] text-3xl">
                          <iconify-icon
                            icon="mdi:tune-vertical"
                            className="text-yellow text-2xl"
                          ></iconify-icon>
                        </div>
                        <div className="text-left">
                          <div className="text-white text-sm font-medium mb-0.5">
                            Edit Settings
                          </div>
                          <div className="text-gray text-xs">
                            Scoring, rosters and more
                          </div>
                        </div>
                    </div>
                    <div className="text-white text-xl">
                        <iconify-icon icon="lsicon:right-filled"></iconify-icon>
                    </div>
                  </button>
                </div>
              </Col>
        </Row>
        {/* invite friends */}
         <div className="bg-linear-to-b from-[#EFCA52] to-[#EEDA9A] rounded-[18px] p-5 h-full text-black mt-6">
            <div className="font-semibold text-2xl">Invite Friends</div>
            <p className="text-lg mt-3">Playing in solo is fin, but leagues are better with friends. Share your link and fill the draft room.</p>
            <div className="flex items-center gap-2 mt-3">
                <button className="border border-dashed border-black rounded-3xl h-[45px] flex items-center justify-center px-4 w-full">Invite a friend</button>
                <button className="h-[45px] w-[45px] rounded-full border border-black text-black flex items-center justify-center">
                   
                     <iconify-icon icon="mdi:share-variant"></iconify-icon>
                </button>
            </div>
        </div>
        {/* draft summary */}
        <div className="bg-lightgray rounded-[18px] p-5 mt-5">
             <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-[16px] font-semibold">
                  Draft Summary
                </h3>
                <p className="text-gray text-sm">League draft configuration</p>
              </div>

              {/* Draft Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {/* Draft Time */}
                <div>
                  <div className="text-gray text-xs">Draft Time</div>
                  <div className="text-yellow font-semibold text-sm my-4">
                    Not Set
                  </div>
                  <div className="text-gray text-xs mt-1">Tap edit to schedule</div>
                </div>

                {/* Draft Type */}
                <div>
                  <div className="text-gray text-xs">Draft Type</div>
                  <div className="text-white font-semibold text-sm my-4">
                    Snake
                  </div>
                  <div className="text-gray text-xs mt-1">Live online draft</div>
                </div>

                {/* Auto Renew */}
                <div>
                  <div className="text-gray text-xs">Auto Renew</div>
                  <div className="text-white font-semibold text-sm my-4">Yes</div>
                  <div className="text-gray text-xs mt-1">Rosters reset yearly</div>
                </div>

                {/* Rounds */}
                <div>
                  <div className="text-gray text-xs">Rounds</div>
                  <div className="text-white font-semibold text-sm my-4">15</div>
                  <div className="text-gray text-xs mt-1">
                    Standard roster size
                  </div>
                </div>
              </div>
            </div>
        </div>
        {/* table */}
          <div className="mt-8">
                <Row
                  gutter={[
                    { xs: 16, sm: 24, md: 22 },
                    { xs: 16, sm: 24, md: 22 },
                  ]}
                >
                  {/* Left Column - Standings Table */}
                  <Col xs={24} lg={12}>
                    <div className="bg-linear-to-b border border-secondgray from-[#191818] to-[#2E2E2E] rounded-[18px] p-5 standings-container">
                     
                      <StandingsTable />
                    </div>
                  </Col>
        
                  {/* Right Column - Transactions */}
                  <Col xs={24} lg={12}>
                    <div className="bg-linear-to-b border border-secondgray from-[#191818] to-[#2E2E2E] rounded-[18px] p-5">
                      <h2 className="text-white text-[16px] md:text-lg font-bold mb-6">
                        Transactions
                      </h2>
                      <TransactionsList />
                    </div>
                  </Col>
                </Row>
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
                               <button onClick={() => setSettingsModalOpen(false)} className=" text-white w-6 text-2xl">
                                 <iconify-icon icon="gridicons:cross"></iconify-icon>
                               </button>
                                      <h2 className="text-center font-bold text-2xl">Settings</h2>
                          <div className="w-6"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {/* Draft Settings */}
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                            Draft settings
                          </div>
                        </div>
              
                        {/* League Summary */}
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                            League summary
                          </div>
                        </div>
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                            Scoring Settings
                          </div>
                        </div>
              
                        {/* League Summary */}
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                          Commissioner Tools
                          </div>
                        </div>
              
                        {/* Account Settings */}
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                            Account Settings
                          </div>
                        </div>
              
                        {/* Personal Settings */}
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                            Personal Settings
                          </div>
                        </div>
              
                        {/* Team Settings */}
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                            Team settings
                          </div>
                        </div>
              
                        {/* Notifications */}
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] h-[120px] flex items-center justify-center hover:bg-[#353535] transition-colors cursor-pointer">
                          <div className="text-white font-semibold text-center text-sm">
                            Notifications
                          </div>
                        </div>
                      </div>
                        <div className="border border-secondgray rounded-2xl bg-linear-to-b from-[#191818] to-[#2E2E2E] mt-4 hover:bg-[#353535] transition-colors cursor-pointer p-5 flex flex-col gap-5">
                         <div className="font-bold text-lg">
                          Ready to Play?
                         </div>
                         <button className="yellow-button h-[37px] w-full">I'm done. Lets Play!</button>
                        </div>
                    </Modal>
    </div>
  )
}

export default LeagueCommissionerSecond
