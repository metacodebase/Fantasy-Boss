import { useState } from "react"
import "./DraftTradeZone.css"

const DraftTradeZone = () => {
  const [selectedPlayers, setSelectedPlayers] = useState({
    1: false,
    2: false,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  })

  const [selectedPicks, setSelectedPicks] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: true,
    7: false,
  })

  const playersData = [
    { id: 1, name: "QB - Russell Wilson" },
    { id: 2, name: "RB - Toddy Gurley" },
    { id: 3, name: "QB - Russell Wilson" },
    { id: 4, name: "RB - Toddy Gurley" },
    { id: 5, name: "RB - Toddy Gurley" },
    { id: 6, name: "QB - Russell Wilson" },
    { id: 7, name: "RB - Toddy Gurley" },
    { id: 8, name: "RB - Toddy Gurley" },
    { id: 9, name: "RB - Toddy Gurley" },
  ]

  const picksData = [
    { id: 1, name: "1st Round - 4th Pick" },
    { id: 2, name: "1st Round - 4th Pick" },
    { id: 3, name: "1st Round - 4th Pick" },
    { id: 4, name: "1st Round - 4th Pick" },
    { id: 5, name: "1st Round - 4th Pick" },
    { id: 6, name: "1st Round - 13th Pick" },
    { id: 7, name: "1st Round - 4th Pick" },
  ]

  const togglePlayer = (id) => {
    setSelectedPlayers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const togglePick = (id) => {
    setSelectedPicks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Multi Team Trade</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
           6 team PPR • 2021 Season
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
            <div className="text-gray">Last Pick</div>
            <div className="text-gray">TJ Hockensen - Pick 33</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="">Trade Zone</div>
            <div className="">Search for a player or select a team below</div>
        </div>
          <div className="relative flex-1 mt-4">
          <input
            type="text"
            placeholder="Search players"
            className="w-full ps-10 pe-4 h-[45px] rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#1E1E1E] to-[#3B3B3B] text-white placeholder-gray focus:outline-none"
          />
          <span className="absolute left-3 text-xl top-[26px] transform -translate-y-1/2">
           {/* add the search icon here iconify */}
           <iconify-icon icon="mynaui:search"></iconify-icon>

          </span>
        </div>
        <div className="flex items-center gap-2 mt-5">
               <div className="flex items-center justify-center rounded-xl bg-[#F9B816] text-black h-[45px] w-12 px-4">
          QB
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#F9D01A] from-[#191818] to-[#2E2E2E] h-[45px] w-12 px-4">
         RB
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#F9D01A] from-[#191818] to-[#2E2E2E] h-[45px] w-12 px-4">
         WR
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#F9D01A] from-[#191818] to-[#2E2E2E] h-[45px] w-12 px-4">
        TE
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#F9D01A] from-[#191818] to-[#2E2E2E] h-[45px] w-12 px-4">
       K
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#F9D01A] from-[#191818] to-[#2E2E2E] h-[45px] w-12 px-4">
       DEF
        </div>
        </div>
        <div className="flex items-center gap-2 text-2xl mt-5">
            <div className="text-yellow flex self-center">
            <iconify-icon icon="hugeicons:circle-arrow-data-transfer-horizontal"></iconify-icon>
            </div>
            <div className="text-sm">QB - Russell Wilson</div>
        </div>
        <div className="flex items-center gap-2 text-2xl mt-5">
            <div className="text-yellow flex self-center">
            <iconify-icon icon="hugeicons:circle-arrow-data-transfer-horizontal"></iconify-icon>
            </div>
            <div className="text-sm">QB - Russell Wilson</div>
        </div>
        <div className="flex items-center gap-2 text-2xl mt-5">
            <div className="text-[#646464] flex self-center">
            <iconify-icon icon="hugeicons:circle-arrow-data-transfer-horizontal"></iconify-icon>
            </div>
            <div className="text-sm">QB - Russell Wilson</div>
        </div>
    {/*  my team */}
         <div className="border border-white rounded-xl p-4 mt-6 flex gap-2">
          <div className="bg-[#343434] h-[52px] w-[52px] rounded-full flex items-center justify-center">
            <img src="/public/assets/images/team-small.png" className="h-7 w-[22px]" alt="team-small" />
          </div>
          <div>
            <div className="font-semibold mb-2">My Team</div>
            <p className="text-gray">6-Team PPR • 2021</p>
          </div>
         </div>

        {/* Players and Picks Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Players available for trade */}
          <div>
            <h6 className="text-white font-semibold text-lg mb-6">Players available for trade</h6>
            <div className="trade-players-list">
              {playersData.map((player) => (
                <div
                  key={player.id}
                  className="player-item"
                  onClick={() => togglePlayer(player.id)}
                >
                  <div className={`rounded-checkbox ${selectedPlayers[player.id] ? "checked" : ""}`}>
                    {selectedPlayers[player.id] && (
                      <iconify-icon icon="mdi:check" className="checkbox-icon"></iconify-icon>
                    )}
                  </div>
                  <span className="player-text">{player.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Picks */}
          <div>
            <h6 className="text-white font-semibold text-lg mb-6">Remaining Picks</h6>
            <div className="trade-picks-list">
              {picksData.map((pick) => (
                <div
                  key={pick.id}
                  className="pick-item"
                  onClick={() => togglePick(pick.id)}
                >
                  <div className={`rounded-checkbox ${selectedPicks[pick.id] ? "checked" : ""}`}>
                    {selectedPicks[pick.id] && (
                      <iconify-icon icon="mdi:check" className="checkbox-icon"></iconify-icon>
                    )}
                  </div>
                  <span className="pick-text">{pick.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
             <div className="flex flex-col gap-4 justify-center mt-12">
            <button  className="yellow-button h-[52px]">
              Select Players to trade
            </button>
            <button  className="yellow-outline-button h-[52px]">
              Add Another Team
            </button>
          </div>
       </div>
    </div>
  )
}

export default DraftTradeZone
