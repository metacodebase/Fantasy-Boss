import { Col, Row, Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import StandingsTable from "../../components/StandingsTable";
import TransactionsList from "../../components/TransactionsList";

const League = () => {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // Mock data for matchups
  const matchupsData = [
    {
      week: "Week 1",
      matches: [
        { team1: "Team 1", team2: "Team 7", score1: "0-0", score2: "0-0" },
        { team1: "Team 2", team2: "Team 8", score1: "0-0", score2: "0-0" },
        { team1: "Team 3", team2: "Team 9", score1: "0-0", score2: "0-0" },
        { team1: "Team 4", team2: "Team 10", score1: "0-0", score2: "0-0" },
        { team1: "Team 5", team2: "Team 11", score1: "0-0", score2: "0-0" },
      ],
    },
    {
      week: "Week 2",
      matches: [
        { team1: "Team 6", team2: "Team 1", score1: "0-0", score2: "0-0" },
        { team1: "Team 7", team2: "Team 2", score1: "0-0", score2: "0-0" },
        { team1: "Team 8", team2: "Team 3", score1: "0-0", score2: "0-0" },
        { team1: "Team 9", team2: "Team 4", score1: "0-0", score2: "0-0" },
        { team1: "Team 10", team2: "Team 5", score1: "0-0", score2: "0-0" },
      ],
    },
    {
      week: "Week 3",
      matches: [
        { team1: "Team 1", team2: "Team 8", score1: "0-0", score2: "0-0" },
        { team1: "Team 2", team2: "Team 9", score1: "0-0", score2: "0-0" },
        { team1: "Team 3", team2: "Team 10", score1: "0-0", score2: "0-0" },
        { team1: "Team 4", team2: "Team 11", score1: "0-0", score2: "0-0" },
        { team1: "Team 5", team2: "Team 6", score1: "0-0", score2: "0-0" },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Row
        gutter={[
          { xs: 16, sm: 24, md: 22 },
          { xs: 16, sm: 24, md: 22 },
        ]}
      >
        {/* Left Column - Draft Section */}
        <Col xs={24} lg={16}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            {/* Draft Open Box */}
            <Row
              gutter={[
                { xs: 16, sm: 24, md: 22 },
                { xs: 16, sm: 24, md: 22 },
              ]}
            >
              <Col xs={24} lg={16}>
                <div className="border-2 border-dashed border-yellow rounded-2xl px-3 py-8 mb-6">
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
                <div className="flex flex-col gap-4 mb-8">
                  {/* Set-up Avatar Button */}
                  <button className="bg-lightgray  rounded-2xl border border-[#7B7B7B] p-3 flex  gap-3 transition-colors group">
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
                  </button>

                  {/* Edit Settings Button */}
                  <button onClick={() => setSettingsModalOpen(true)} className="bg-lightgray  rounded-2xl border border-[#7B7B7B] p-3 flex  gap-3 transition-colors group">
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
                  </button>
                </div>
              </Col>
            </Row>

            {/* Draft Summary Section */}
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
        </Col>

        {/* Right Column - League Overview */}
        <Col xs={24} lg={8}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            {/* Header */}
            <div className="text-gray text-[16px] uppercase mb-3">
              LEAGUE OVERVIEW
            </div>

            {/* League Name */}
            <h2 className="text-white text-[16px] md:text-lg font-semibold mb-3">
              Fanisko League
            </h2>

            {/* League Details */}
            <div className="flex flex-col gap-2 mb-4">
              <span className="bg-[#050608] py-2 px-4 rounded-full text-gray text-xs font-medium w-fit">
                Season 2024
              </span>

              <span className="bg-[#050608] py-2 px-4 rounded-full text-gray text-xs font-medium w-fit">
                6 - Team PPR • 2025
              </span>

              <span className="bg-[#050608] py-2 px-4 rounded-full text-gray text-xs font-medium w-fit">
                Weekly Head-to-Head
              </span>
            </div>

            {/* Commissioner Info */}
            <div className="mb-3">
              <div className="text-gray text-[16px] mb-2">
                Commissioner: <span className="text-white">Alex R.</span>
              </div>
            </div>

            {/* Draft Status */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-gray text-[16px]">Draft:</div>
              <div className="text-yellow font-semibold text-[16px]">Open</div>
            </div>

            {/* View Standings Button */}
            <button className="w-full bg-[#3E3E3E] hover:bg-[#333333] rounded-full text-white font-medium py-3.5 transition-colors">
              View Full Standings
            </button>
          </div>
        </Col>
      </Row>

      {/* Matchups Section with Swiper */}
      <div className="mt-8">
        <div className="bg-linear-to-b border border-secondgray from-[#191818] to-[#2E2E2E] rounded-[18px] p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white  md:text-lg font-bold">
              Matchups
            </h2>
             <div className="text-white  md:text-lg font-bold">
              Week 1
            </div>
          </div>

          {/* Swiper Component */}
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="matchups-swiper"
          >
            {matchupsData.map((weekData, weekIndex) => (
              <SwiperSlide key={weekIndex}>
                <div className="flex flex-col gap-3 md:gap-4 pb-8">
                  {weekData.matches.map((match, matchIndex) => (
                    <div
                      key={matchIndex}
                      className="flex items-center justify-center gap-10 relative"
                    >
                      {/* Team 1 Box */}
                      <div className="flex-1 border border-yellow rounded-xl px-3 py-3 hover:bg-[#252525] transition-colors">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-[42px] h-[42px] bg-[#3B3B3B] rounded-lg flex items-center justify-center shrink-0 text-[#C0A172] text-3xl">
                      <iconify-icon
                        icon="mdi:account"
                        className=""
                      ></iconify-icon>
                    </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm md:text-base">
                              {match.team1}
                            </div>
                            <div className="text-gray text-xs md:text-sm">
                              {match.score1}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* VS Badge - Overlaps both boxes */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-linear-to-b from-[#FAAC15] to-[#F9D81B] text-black font-medium px-6 lg:px-10 h-[26px]  text-xs md:text-[16px] rounded-3xl flex items-center justify-center">
                          vs
                        </div>
                      </div>

                      {/* Team 2 Box */}
                      <div className="flex-1 border border-yellow rounded-xl px-3 py-3 hover:bg-[#252525] transition-colors">
                        <div className="flex items-center gap-2 md:gap-3 justify-end">
                          <div className="flex-1 min-w-0 text-right">
                            <div className="text-white font-semibold text-sm md:text-base">
                              {match.team2}
                            </div>
                            <div className="text-gray text-xs md:text-sm">
                              {match.score2}
                            </div>
                          </div>
                             <div className="w-[42px] h-[42px] bg-[#3B3B3B] rounded-lg flex items-center justify-center shrink-0 text-[#C0A172] text-3xl">
                      <iconify-icon
                        icon="mdi:account"
                        className=""
                      ></iconify-icon>
                    </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

       
        </div>
      </div>

      {/* Standings and Transactions Section */}
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

      {/* Settings Modal */}
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
      </Modal>
    </div>
  );
};

export default League;