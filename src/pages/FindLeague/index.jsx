import { Col, Row, Select, Tabs } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
import Range from "../../components/Slider/Range"
import JoinLeagueModal from "../../components/JoinLeagueModal/JoinLeagueModal"
import "./tabs.css"


const FindLeague = () => {
     const [selectedLeague, setSelectedLeague] = useState("fanisko_league")
     const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
     const [selectedLeagueData, setSelectedLeagueData] = useState(null)
    const leagueOptions = [
  { value: "fanisko_league", label: "Fanisko League" },
  { value: "main_league", label: "Main League" },
  { value: "casual_league", label: "Casual League" },
];

const leagues = [
  {
    id: 1,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: "$100",
    isFree: false,

  },
  {
    id: 2,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: null,
    isFree: true,

  },
  {
    id: 3,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: null,
    isFree: true,

  },
  {
    id: 4,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: "$100",
    isFree: false,

  },
  {
    id: 5,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: null,
    isFree: true,

  },
  {
    id: 6,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: null,
    isFree: true,

  },
  {
    id: 7,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: "$100",
    isFree: false,

  },
  {
    id: 8,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: null,
    isFree: true,

  },
  {
    id: 9,
    name: "Toms Game",
    description: "24 Dynasty PPR Classic",
    buyIn: null,
    isFree: true,

  },
];

const LeagueCard = ({ league, onJoin }) => (
  <div className="league-card">
    <div className="league-card-header">
      <div><img src="/assets/images/sheild.png" className="w-10" alt="sheild" /></div>
      <div className="league-card-info">
        <h3 className="league-card-title">{league.name}</h3>
        <p className="league-card-description">{league.description}</p>
      </div>
      <div className="league-card-badge">
        {league.isFree ? "Free" : league.buyIn}
      </div>
    </div>
    <button onClick={() => onJoin(league)} className="league-card-button">JOIN</button>
  </div>
);

const handleJoinLeague = (league) => {
  setSelectedLeagueData(league)
  setIsJoinModalOpen(true)
};

const items = [
  {
    key: '1',
    label: 'PUBLIC LEAGUES',
    children: (
      <div>
        <div className="tab-count mt-4">9 leagues available</div>
        <Row  gutter={[
              { xs: 16, sm: 32, md: 22 },
              { xs: 16, sm: 32, md: 22 },
            ]}>
          {leagues.map((league) => (
            <>
              <Col xs={24} lg={8}>      
              <LeagueCard key={league.id} league={league} onJoin={handleJoinLeague} />
              </Col>

            </>
          ))}
       </Row>
      </div>
    ),
  },
  {
    key: '2',
    label: 'BOSS LEAGUES',
    children: (
      <div>
        <div className="tab-count mt-4">3 leagues available</div>
          <Row  gutter={[
              { xs: 16, sm: 32, md: 22 },
              { xs: 16, sm: 32, md: 22 },
            ]}>
          {leagues.slice(0, 3).map((league) => (
            <>
        <Col xs={24} lg={8}>           
            <LeagueCard key={league.id} league={league} onJoin={handleJoinLeague} />
        </Col>
            </>
          ))}
        </Row>
      </div>
    ),
  },
];
const onChange = key => {
  console.log(key);
};
  return (
    <div>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 bg-[linear-gradient(180deg,#010101_0%,#313131_100%)] rounded-3xl p-5">
        {/* League Select Section */}
        <div className="flex flex-col lg:flex-row items-center gap-3">
            <div className="flex items-center gap-3 bg-[#3E3E3E] border border-gray-700 rounded-lg px-4 py-2">
              {/* Icon */}
              <div className="league-icon">
                <iconify-icon icon="mynaui:refresh"></iconify-icon>
              </div>
            
              {/* Select Dropdown */}
              <div className="flex flex-col">
                <Select
                  value={selectedLeague}
                  onChange={setSelectedLeague}
                  options={leagueOptions}
                  className="fantasy-header-select"
            
                  bordered={false}
                />
                <div className="league-info-subtitle text-gray font-medium text-sm">6 - Team PPR • 2025</div>
              </div>
            </div>
            <div>
                <button className="flex items-center border border-white text-white rounded-lg p-2">
                    <iconify-icon icon="ic:baseline-plus"></iconify-icon>
                    <span className="text-white font-medium ml-2">Create or <br /> Join League</span>
                </button>
            </div>
        </div>
        <div>
            <img src="/assets/images/dashboard-logo.png" className="h-auto w-auto" alt="dashboard-logo" />
        </div>
        <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-md text-white bg-[#394962] text-xl flex items-center justify-center">
                    <iconify-icon icon="mage:playstore"></iconify-icon>
            </button>
            <button className="w-9 h-9 rounded-md text-white bg-[#394962] text-xl flex items-center justify-center">
              <iconify-icon icon="ic:baseline-apple"></iconify-icon>
            </button>
            {/* add the divider  */}
            <div className="w-px h-7 bg-[#707070]"></div>
            <div>
                <img src="/assets/images/demo.png" className="h-11 w-11 rounded-full" alt="dummy-pic" />
            </div>
            <button className="h-9 bg-[#3E3E3E] text-white uppercase flex items-center justify-center rounded-3xl p-3 text-sm">
                log out
            </button>
        </div>
      </div>   

        <div className="bg-lightgray rounded-[18px] border border-secondgray p-5 mt-4">
            <Link to="/dashboard" className="flex items-center gap-2">
       <iconify-icon icon="ep:arrow-left"></iconify-icon>
       <div className="font-bold text-lg text-white">
        Find a League
       </div>
            </Link>
        </div>
         </div>
           {/*league tabs  */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
                  <Row  gutter={[
              { xs: 16, sm: 32, md: 22 },
              { xs: 16, sm: 32, md: 22 },
            ]}>
            <Col xs={24} lg={8}>
            <div className="bg-lightgray rounded-[18px] border border-secondgray p-5 mt-4">
             <div className="font-semibold text-white">
                Search Leagues
             </div>
             <div className="relative mt-5">
                <div className="text-[#979797] text-xl absolute left-3 top-[25px] transform -translate-y-1/2"><iconify-icon icon="proicons:search"></iconify-icon></div>
                <input type="text" placeholder="Search by name..." className="h-[45px] rounded-[10px] w-full border border-secondgray pl-10" />
             </div>
            </div>
            <div className="bg-lightgray rounded-[18px] border border-secondgray p-5 mt-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-white">Filters</div>
                <div className="text-yellow text-sm">Clear All</div>
              </div>
                <div className="font-bold text-lg text-white my-5">League Size</div>
                 <div className="flex items-center justify-between gap-3">
                    <button className="yellow-button h-9 text-sm w-full p-0!">11 or less</button>
                    <button className="yellow-outline-button h-9 text-sm w-full p-0!">12</button>
                    <button className="yellow-outline-button h-9 text-sm w-full p-0!">13+</button>
                 </div>
                <div className="font-bold text-lg text-white my-5">League Type</div>
                 <div className="flex items-center justify-between gap-3">
                    <button className="yellow-button h-9 text-sm w-full p-0!">Redraft</button>
                 
                    <button className="yellow-outline-button h-9 text-sm w-full p-0!">Keeper</button>
                 </div>
                <div className="font-bold text-lg text-white my-5">Buy In Range</div>
                <div className="mt-5">
                    <Range />
                </div>

                <div className="font-bold text-lg text-white my-5">Draft Type</div>
                 <div className="flex items-center justify-between gap-3">
                    <button className="yellow-button h-9 text-sm w-full p-0!">Snake</button>
                 
                    <button className="yellow-outline-button h-9 text-sm w-full p-0!">Linear</button>
                 </div>

            </div>
             
            </Col>
            <Col xs={24} lg={16}>
              <div className="tabs-wrapper">
                  <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="leagues-tabs" />
              </div>
            </Col>
            </Row>
            </div>

      <JoinLeagueModal 
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        leagueData={selectedLeagueData}
      />
    </div>
  )
}

export default FindLeague
