
import { Row, Col, } from "antd"
import { useState } from "react"
import LeagueCreationModal from "../../components/LeagueCreationModal"
import SwiperBoss from "../../components/SwiperBoss"


const Home = () => {
  const [isLeagueModalOpen, setIsLeagueModalOpen] = useState(false)
  // Mock data for current leagues
  const currentLeagues = [
    {
      id: 1,
      name: "Toms Game",
      description: "Draft strategy to beat Ton...",
      icon: "⚽",
    },
    {
      id: 2,
      name: "Roms Stuff",
      description: "Roms does things with ppl...",
      icon: "🏈",
    },
    {
      id: 3,
      name: "Tiger Balm",
      description: "Eye of the tiger baby",
      icon: "🐯",
    },
    {
      id: 4,
      name: "Tiger Balm",
      description: "Eye of the tiger baby",
      icon: "🐯",
    },
    {
      id: 5,
      name: "Tiger Balm",
      description: "Eye of the tiger baby",
      icon: "🐯",
    },
  ]

  const profileStats = [
    { label: "Active leagues", value: "3" },
    { label: "Last season finish", value: "Top 5%" },
    { label: "Lifetime record", value: "62-38" },
  ]

  return (
    <div className="">
      <Row  gutter={[
              { xs: 16, sm: 32, md: 22 },
              { xs: 16, sm: 32, md: 22 },
            ]}>
        {/* Left Section - Create League & Current Leagues */}
        <Col xs={24} lg={16}>
          {/* Create or Join League Card */}
              <div className="bg-lightgray rounded-[18px]  p-5 mt-4">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                   <button 
                     onClick={() => setIsLeagueModalOpen(true)}
                     className="yellow-button w-full h-[52px]">
              
            Create or join a league
              </button>
              <button className="yellow-outline-button w-full h-[52px]">
               View all leagues
              </button>
                </div>

           <div className="flex justify-between bg-[#050608] rounded-[10px] p-4 mt-5">
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center h-7 w-7 rounded-full bg-white text-maindark text-2xl">
                <iconify-icon icon="ic:baseline-plus"></iconify-icon>
              </button>
              <div>
                <div className="font-medium text-white mb-1">
                  Create or join a League to get started
                </div>
                <p className="text-gray text-sm">Draft with friends, office rivals, or join a public competition</p>
              </div>
            </div>
            <button 
              onClick={() => setIsLeagueModalOpen(true)}
              className="yellow-button h-8">
             Create
            </button>
           </div>
          </div>

          {/* Current Leagues Section */}
          <div className="bg-lightgray rounded-[18px]  p-5 mt-4">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-white text-2xl font-semibold  uppercase">Current Leagues</h4>
              <p className="text-gray font-medium">3 active • Next draft in 2 days</p>
            </div>

            {/* Leagues List */}
            <div className="space-y-3">
              {currentLeagues.map((league) => (
                <div
                  key={league.id}
                  className="flex items-center justify-between gap-4 bg-linear-to-b from-[#2E2E2E] to-[#191818] rounded-xl p-4  transition-all"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div><img src="/assets/images/sheild.png" className="w-10" alt="sheild" /></div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{league.name}</h4>
                      <p className="text-gray text-sm">{league.description}</p>
                    </div>
                  </div>
                  <button className="yellow-button h-8">PLAY</button>
                </div>
              ))}
            </div>

            {/* Footer Text */}
            <p className="text-gray text-sm mt-6">
              Want more? Start a new league or explore public competitions
            </p>
          </div>
        </Col>

        {/* Right Section - Profile & Mobile App */}
        <Col xs={24} lg={8}>
          {/* Profile Snapshot Card */}
          <div className="bg-lightgray rounded-[18px] p-5 mb-6">
            <h5 className="text-gray uppercase font-semiboldd mb-4">
              Profile Snapshot
            </h5>
            <h4 className="text-white text-2xl font-semibold mb-6">Season overview</h4>

            {/* Stats Grid */}
            <div className="space-y-4">
              {profileStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray">{stat.label}</span>
                
                    <span className="text-white font-bold">{stat.value}</span> 
                </div>
              ))}

              {/* Status Badge */}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-gray">Status</div>
                <span className="bg-[#004B8B] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Championship contender
                </span>
              </div>
            </div>
          </div>

          {/* Go Mobile Card */}
          <div className="bg-lightgray rounded-[18px] p-5 h-[500px] flex flex-col justify-center">
            <h4 className="text-gray text-xs uppercase  font-semibold mb-4">
              Go Mobile
            </h4>
            <h3 className="text-white text-2xl font-semibold mb-4">Play Anywhere</h3>
            <p className="text-gray mb-6">
              Draft, chat, and track scores with the FantasyBoss mobile app
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="bg-[#050608] rounded-[10px] px-4 py-2 flex items-center gap-3 w-full">
                  <span className="w-7 h-7 rounded-full text-white bg-[#394962] text-xl flex items-center justify-center">
              <iconify-icon icon="ic:baseline-apple"></iconify-icon>
            </span>

            <div>APP STORE</div>
              </button>
              <button className="bg-[#050608] rounded-[10px] px-4 py-2 flex items-center gap-3 w-full">
                       <span className="w-7 h-7 rounded-full text-white bg-[#394962] text-xl flex items-center justify-center">
                    <iconify-icon icon="mage:playstore"></iconify-icon>
            </span>
      <div>Google play</div>
              </button>
            </div>

            <p className="text-gray">
              Sign in with the same account to sync all your leagues.
            </p>
          </div>
        </Col>
      </Row>
        <Row  gutter={[
              { xs: 16, sm: 32, md: 22 },
              { xs: 16, sm: 32, md: 22 },
            ]} className="justify-center">
              <Col xs={24} lg={16}>
              
      <SwiperBoss />
              
              </Col>


            </Row>


      {/* League Creation Modal */}
      <LeagueCreationModal 
        isOpen={isLeagueModalOpen} 
        onClose={() => setIsLeagueModalOpen(false)} 
      />
    </div>
  )
}

export default Home
