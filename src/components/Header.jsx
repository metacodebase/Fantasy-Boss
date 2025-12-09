import { Select } from "antd"
import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Drawer } from "antd"
import { MenuOutlined } from "@ant-design/icons"

const leagueOptions = [
  { value: "fanisko_league", label: "Fanisko League" },
  { value: "main_league", label: "Main League" },
  { value: "casual_league", label: "Casual League" },
]

const navigationItems = [
  { label: "LEAGUE & TRANSACTIONS", href: "/league" },
  { label: "MY MATCHUPS", href: "/matchups" },
  { label: "MY TEAM", href: "/team" },
  { label: "PLAYERS & WATCHLIST", href: "/players" },
  { label: "TRADE ZONE", href: "/trade" },
  { label: "SCORES & NEWS", href: "/scores" },
  { label: "LEAGUE CHAT", href: "/chat" },
  { label: "SIDE BETS", href: "/bets" },
  { label: "BEAT THE BOSS", href: "/boss" },
]

const Header = () => {
  const [selectedLeague, setSelectedLeague] = useState("fanisko_league")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  const isActive = (href) => {
    return location.pathname === href
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between gap-2 bg-[linear-gradient(180deg,#010101_0%,#313131_100%)] rounded-3xl p-5">
        {/* League Select Section */}
        <div className="flex items-center gap-3">
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
            <img src="/public/assets/images/dashboard-logo.png" className="h-auto w-auto" alt="dashboard-logo" />
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
                <img src="/public/assets/images/demo.png" className="h-11 w-11 rounded-full" alt="dummy-pic" />
            </div>
            <button className="h-9 bg-[#3E3E3E] text-white uppercase flex items-center justify-center rounded-3xl p-3 text-sm">
                log out
            </button>
        </div>
      </div>
      <div className="bg-lightgray rounded-[18px] border border-[#707070] p-5 mt-4">
        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center justify-center gap-6 text-center">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-xs md:text-sm font-semibold text-gray uppercase tracking-wider transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive(item.href)
                  ? "text-yellow bg-opacity-10 border border-yellow border-opacity-30"
                  : "text-gray hover:text-yellow"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-center">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 text-gray hover:text-yellow transition-colors"
          >
            <MenuOutlined style={{ fontSize: "24px" }} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <span className="text-white font-bold">NAVIGATION</span>
          </div>
        }
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        placement="right"
        width={280}
        styles={{
          body: { padding: "0", backgroundColor: "#1f2937" },
          header: { backgroundColor: "#111111", borderBottom: "1px solid #374151" },
          title: { color: "#fff", fontWeight: "bold" },
        }}
      >
        <nav className="flex flex-col gap-2">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setDrawerOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                isActive(item.href)
                  ? "text-yellow  bg-opacity-10 border-l-4 border-yellow"
                  : "text-gray hover:text-yellow hover:bg-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Drawer>
    </div>
  )
}

export default Header
