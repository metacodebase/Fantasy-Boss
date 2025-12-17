import { Col, Row } from "antd"

const LeagueDraftSetting = () => {
  const draftSettings = [
    { label: "Draft Type", value: "Snake" },
    { label: "Third Round Reversal", value: "Yes" },
    { label: "Available Players", value: "All" },
    { label: "Include Minor Leagues", value: "Yes" },
    { label: "Time Per Pick", value: "60 seconds" },
    { label: "CPU Auto pick", value: "On after 2 timeouts" },
    { label: "Undraft Players", value: "Waivers" },
    { label: "Player Sorting", value: "ADP" },
    { label: "Trades During Draft", value: "No" },
    { label: "Override Invite Capacity", value: "No" },
  ];

  const draftFees = [
    { label: "Use Fantasyboss to collect league fees?", value: "Yes" },
    { label: "Require payment before joining?", value: "Yes" },
    { label: "Regular League Buy In", value: "$100" },
    { label: "Enable Side Prize Pool", value: "Yes" },
    { label: "Side Pool Buy In", value: "$25" },
    { label: "Total League Buy Join", value: "$125" },
  ];

  const rostersWaivers = [
    { label: "Use Waivers?", value: "Yes" },
    { label: "Waiver Order", value: "FAAB" },
    { label: "Clear After Start?", value: "Yes" },
    { label: "Time On After", value: "2 days" },
    { label: "Max Moves Per Week", value: "2" },
    { label: "Max Moves Per Season", value: "30" },
    { label: "Prevent Churn", value: "Yes" },
    { label: "Prevent Top Players", value: "Yes" },
    { label: "Prevent Bunch Drops", value: "Yes" },
    { label: "Lock All Free Agents", value: "Yes" },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
            Draft Settings • Tune draft flow, fees and prize pools
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
        {/* Left Column - Draft Summary */}
        <Col xs={24} lg={12}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                  Draft Summary
                </h3>
                <p className="text-gray text-xs md:text-sm">
                  Control how the draft itself works.
                </p>
              </div>
              <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
            </div>

            {/* Draft Settings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {draftSettings.map((setting, index) => (
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

        {/* Right Column - Draft Fees */}
        <Col xs={24} lg={12}>
          <div className="flex flex-col gap-4">
            {/* Draft Order Section */}
            <div className="bg-lightgray rounded-[18px] p-5 h-full flex flex-col gap-4">
              <div className="font-semibold text-base md:text-lg text-white">
                Draft - Edit Draft Order
              </div>
              <button className="yellow-button h-9 md:h-10 text-sm md:text-base! w-full">use defaults</button>
            </div>

            {/* Draft Fees Section */}
            <div className="bg-lightgray rounded-[18px] p-5 h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                    Draft Fees
                  </h3>
                  <p className="text-gray text-xs md:text-sm">
                    Manage league buy-ins and payment rules.
                  </p>
                </div>
                <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                  <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
                </button>
              </div>

              {/* Draft Fees Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {draftFees.map((fee, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-white font-semibold text-sm mb-2">
                      {fee.label}
                    </span>
                    <span className="text-gray text-sm">
                      {fee.value}
                    </span>
                  </div>
                ))}
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
        {/* Left Column - Main Prize Payout */}
        <Col xs={24} lg={12}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                  Draft - Main Prize Payout
                </h3>
                <p className="text-gray text-xs md:text-sm">
                  Set how many teams get paid and how much
                </p>
              </div>
              <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
            </div>

            {/* Prize Payout Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  Paid Spots
                </span>
                <span className="text-gray text-sm">
                  4
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  Price Pool
                </span>
                <span className="text-gray text-sm">
                  $1,200
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  1st Place
                </span>
                <span className="text-gray text-sm">
                  $600
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  2nd Place
                </span>
                <span className="text-gray text-sm">
                  $300
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  3rd Place
                </span>
                <span className="text-gray text-sm">
                  $200
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  4th Place
                </span>
                <span className="text-gray text-sm">
                  $100
                </span>
              </div>
            </div>
          </div>
        </Col>

        {/* Right Column - Side Pool Options & Prizes */}
        <Col xs={24} lg={12}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                  Draft - Side Pool Options & Prices
                </h3>
                <p className="text-gray text-xs md:text-sm">
                  Configure fun side contests for your league
                </p>
              </div>
              <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
            </div>

            {/* Side Pool Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  Best Starter
                </span>
                <span className="text-gray text-sm">
                  $25 prize • Weeks not set
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  Best Waiver Pickup
                </span>
                <span className="text-gray text-sm">
                  $25 prize • Weeks not set
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  Largest Win Margin
                </span>
                <span className="text-gray text-sm">
                  $25 prize • Weeks not set
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  Best Record
                </span>
                <span className="text-gray text-sm">
                  $25 prize • Full season
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm mb-2">
                  Most Points
                </span>
                <span className="text-gray text-sm">
                  $25 prize • Full season
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
       <Row
        gutter={[
          { xs: 16, sm: 24, md: 22 },
          { xs: 16, sm: 24, md: 22 },
        ]}
        className="mt-6"
      >
        {/* Left Column - Main Prize Payout */}
        <Col xs={24} lg={12}>
             <div className="bg-lightgray rounded-[18px] p-5 flex flex-col gap-4">
              <div>
                  <div className="font-semibold text-base md:text-lg text-white">
                  Roster & Position Limits
                  </div>
                  <p className="text-gray text-sm">Adjust how many players each team can carry.</p>
              </div>
              <button className="yellow-button h-9 md:h-10 text-sm md:text-base! w-full">VIEW / Edit</button>
            </div>
        </Col>
        {/* Right Column - Rosters & Waivers */}
        <Col xs={24} lg={12}>
          <div className="bg-lightgray rounded-[18px] p-5 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-base md:text-lg text-white mb-1">
                  Draft - Rosters & Waivers
                </h3>
                <p className="text-gray text-xs md:text-sm">
                  Fine-tune waivers, churn protection and moves.
                </p>
              </div>
              <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
            </div>

            {/* Rosters & Waivers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {rostersWaivers.map((item, index) => (
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

export default LeagueDraftSetting
