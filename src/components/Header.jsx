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
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 lg:py-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:bg-[linear-gradient(180deg,#010101_0%,#313131_100%)] rounded-3xl lg:p-5">
        {/* League Select Section */}
        <div className="lg:flex hidden  flex-col lg:flex-row items-center gap-3">
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
        <div className="hidden lg:block">
          <Link to="/dashboard">
              <img src="/assets/images/dashboard-logo.png" className="h-auto w-auto" alt="dashboard-logo" />
          </Link>
        </div>
        <div className="lg:flex hidden items-center gap-2">
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
      <div className="lg:bg-lightgray rounded-[18px] lg:border border-secondgray p-5 mt-4">
        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center justify-center gap-6 text-center">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-xs md:text-sm font-semibold text-gray uppercase tracking-wider transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive(item.href)
                  ? "nav-link-active"
                  : "text-gray hover:text-yellow"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4 w-full justify-between lg:px-2">
          <Link to="/dashboard" className="flex-1">
            <img src="/assets/images/small-logo.png" className="h-12 w-auto" alt="dashboard-logo" />
          </Link>
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-lg  text-2xl hover:bg-[#4A4A4A] transition-colors"
          >
          <iconify-icon icon="entypo:dots-three-vertical"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center gap-3">
            
              <Link to="/dashboard" className="flex-1">
            <img src="/assets/images/dashboard-logo.png" className="h-8 w-auto" alt="dashboard-logo" />
          </Link>
          </div>
        }
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        placement="right"
        width={320}
        closeIcon={<span className="text-white text-lg"><iconify-icon icon="maki:cross"></iconify-icon></span>}
        styles={{
          body: { padding: "0", backgroundColor: "#1a1a1a" },
          header: { backgroundColor: "#252525", borderBottom: "1px solid #3E3E3E" },
          mask: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
        bodyStyle={{ padding: "0" }}
      >
        {/* Drawer Header Section */}
        <div className="mobile-drawer-header">
          <div className="flex items-center gap-3 p-4 border-b border-[#3E3E3E]">
            <img src="/assets/images/demo.png" className="h-10 w-10 rounded-full" alt="user-pic" />
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Your Account</p>
              <p className="text-gray text-xs">6-Team PPR • 2025</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mobile-drawer-nav flex flex-col">
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setDrawerOpen(false)}
              className={`mobile-nav-link ${
                isActive(item.href) ? "mobile-nav-link-active" : ""
              }`}
            >
              <span className="flex-1">{item.label}</span>
              {isActive(item.href) && (
                <span className="text-yellow text-lg">→</span>
              )}
            </Link>
          ))}
          
          {/* Logout Button in Nav */}
          <button 
            onClick={() => setDrawerOpen(false)}
            className="mt-2 border-t border-[#3E3E3E] px-4 py-2 rounded-full text-white bg-lightgray w-28 ms-4"
          >
            <span className="flex-1">LOG OUT</span>
            
          </button>
        </nav>

        {/* Drawer Footer - Empty now */}
        <div className="mobile-drawer-footer border-t border-[#3E3E3E]">
        </div>
      </Drawer>
    </div>
  )
}

export default Header
