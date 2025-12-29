import { Col, Row } from "antd"

const LeagueCreate = () => {
  const leagueSettings = [
    { label: "League Name", value: "Mark's Legigue" },
    { label: "Number of Teams", value: "10" },
    { label: "Auto Renew", value: "Yes" },
    { label: "League Type", value: "Redraft" },
    { label: "League Format", value: "Head to Head" },
    { label: "Matchups Per Period", value: "1" },
    { label: "Extra Weekly Game", value: "No" },
    { label: "League Start", value: "Week 1" },
    { label: "League Ends", value: "Week 17" },
    { label: "Line-up Position Lock", value: "At scheduled kick-off" },
    { label: "Prevent lock for [postponed / cancelled]", value: "Yes" },
  ];


  const tradingPlayoffs = [
    { label: "Allow Trades", value: "Yes" },
    { label: "Max Trades Per Teams", value: "10" },
    { label: "Trade Deadline", value: "Week 10" },
    { label: "Trade Review Time", value: "2 Days" },
    { label: "Trade Veto System", value: "Trade Illegal" },
    { label: "Votes Needed to Veto", value: "5" },
    { label: "Use Playoffs", value: "Yes" },
    { label: "Prevent HM Moves", value: "Yes" },
    { label: "# of Playoff Teams", value: "6" },
    { label: "Playoff Start Week", value: "Week 15" },
    { label: "Match-up Time Limit", value: "1 Week (incl. Finals)" },
    { label: "Loser Bracket", value: "None" },
    { label: "Playoff Start Week", value: "Week 15" },
    { label: "Playoff Seeding", value: "1-6" },
  ];

  const divisions = [
    { label: "Use Divisions?", value: "Yes" },
    { label: "Number of Divisions?", value: "4" },
  ];

  const divisionsList = ["AFC West", "AFC East", "AFC North", "AFC South"];

  const keeperSettings = [
    { label: "# of Keeper Per Team", value: "3" },
    { label: "Initial Keeper Contract Duration", value: "10" },
    { label: "Allow Contract Extensions", value: "Yes" },
    { label: "Max Keeper Contract", value: "5 Years" },
    { label: "Ditch Keepers to be Declared", value: "Dropped - Yes, Traded - No" },
    { label: "Allow Trading of Keepers?", value: "Yes" },
    { label: "Initial Cost for Waiver Keepers", value: "$5" },
    { label: "Can Waiver Pickups be kept?", value: "Yes" },
    { label: "Allow Offseason Keeper Trades?", value: "Yes" },
    { label: "Require ALL players in keeper trade?", value: "Yes" },
    { label: "End Date for Offseason Keeper Trades", value: "9/1" },
    { label: "Start Date for Offseason Keeper Trades", value: "8/1" },
  ];



  return (
    <div>
   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
           Draft • League Settings Overview
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

      {/* draft settings content */}
      <Row
        gutter={[
          { xs: 16, sm: 24, md: 22 },
          { xs: 16, sm: 24, md: 22 },
        ]}
      >
        {/* Left Column - League Settings */}
        <Col xs={24} lg={12}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                  League Settings
                </h3>
              </div>
              <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
            </div>

            {/* League Settings Grid */}
            <div className="grid grid-cols-2 gap-6">
              {leagueSettings.map((setting, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-white font-semibold text-sm  mb-2">
                    {setting.label}
                  </span>
                  <span className="text-gray text-sm ">
                    {setting.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Column - Tiebreakers */}
        <Col xs={24} lg={12}>
          <div className="flex flex-col gap-4 h-full">
            {/* Tiebreakers Section */}
            <div className="bg-lightgray rounded-[18px] p-5 h-full flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-base md:text-lg text-white">
                  League - Tiebreakers
                </h3>
              </div>
              <button className="yellow-button h-9 md:h-10 text-sm md:text-base! w-full">EDIT TIEBREAKERS</button>
            </div>

            {/* Divisions Section */}
            <div className="bg-lightgray rounded-[18px] p-5 h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                    Leagues - Divisions
                  </h3>
                </div>
                <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                  <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
                </button>
              </div>

              {/* Divisions Content */}
              <div className="grid grid-cols-2 gap-6">
                {divisions.map((div, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-white font-semibold text-sm mb-2">
                      {div.label}
                    </span>
                    <span className="text-gray text-sm">
                      {div.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#404040]">
                <h4 className="text-white font-semibold text-sm mb-3">Divisions</h4>
                <div className="flex flex-col gap-2">
                  {divisionsList.map((div, index) => (
                    <div key={index} className="text-gray text-sm">
                      {div}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* main price */}
      <Row
        gutter={[
          { xs: 16, sm: 24, md: 22 },
          { xs: 16, sm: 24, md: 22 },
        ]}
        className="mt-6"
      >
        {/* Left Column - Trading & Playoffs */}
        <Col xs={24} lg={12}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                  League - Trading & Playoffs
                </h3>
              </div>
              <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
            </div>

            {/* Trading & Playoffs Grid */}
            <div className="grid grid-cols-2 gap-6">
              {tradingPlayoffs.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-white font-semibold text-sm mb-2">
                    {item.label}
                  </span>
                  <span className="text-gray text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Column - Keeper Settings */}
        <Col xs={24} lg={12}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                  Leagues - Keeper Settings
                </h3>
              </div>
              <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
            </div>

            {/* Keeper Settings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keeperSettings.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-white font-semibold text-sm mb-2">
                    {item.label}
                  </span>
                  <span className="text-gray text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
   
    </div>
  )
}

export default LeagueCreate
