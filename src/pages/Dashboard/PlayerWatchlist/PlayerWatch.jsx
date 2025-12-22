import { Col, Row, Table, Tabs } from "antd"
import { useState } from "react"

const PlayerWatch = () => {
  const [activeTab, setActiveTab] = useState('1')
  const rosterColumns = [
    {
      title: 'QB',
      dataIndex: 'qb',
      key: 'qb',
      align: 'center',
    },
    {
      title: 'RB',
      dataIndex: 'rb',
      key: 'rb',
      align: 'center',
    },
    {
      title: 'WR',
      dataIndex: 'wr',
      key: 'wr',
      align: 'center',
    },
    {
      title: 'TE',
      dataIndex: 'te',
      key: 'te',
      align: 'center',
    },
    {
      title: 'FLEX',
      dataIndex: 'flex',
      key: 'flex',
      align: 'center',
    },
    {
      title: 'K',
      dataIndex: 'k',
      key: 'k',
      align: 'center',
    },
    {
      title: 'DEF',
      dataIndex: 'def',
      key: 'def',
      align: 'center',
    },
  ];

  const rosterData = [
    {
      key: '1',
      label: 'Starters Needed',
      qb: 1,
      rb: 2,
      wr: 2,
      te: 1,
      flex: 1,
      k: 1,
      def: 1,
    },
    {
      key: '2',
      label: 'Players Drafted',
      qb: 3,
      rb: 2,
      wr: 1,
      te: 0,
      flex: 1,
      k: 1,
      def: 1,
    },
  ];
   const playerStatsData = [
    {
      key: '1',
      position: 'QB',
      badge: 'DRAFT',
      playerName: 'Lamar Jackson',
      playerTeam: 'QB - BA; (7)',
      playerImage: '/assets/images/person.png',
      points: 300.3,
      int: 300.6,
      passYd: 2.2,
      passRtg: 0.8,
      passTd: 0.0,
      passAtt: 32.1,
      adp: 1.1,
      rnk: 2,
      isFavorite: true,
    },
    {
      key: '2',
      position: 'QB',
      badge: 'DRAFT',
      playerName: 'Lamar Jackson',
      playerTeam: 'QB - BA; (7)',
      playerImage: '/assets/images/person.png',
      points: 300.3,
      int: 300.6,
      passYd: 2.2,
      passRtg: 0.8,
      passTd: 0.0,
      passAtt: 32.1,
      adp: 1.1,
      rnk: 2,
      isFavorite: true,
    },
    {
      key: '3',
      position: 'QB',
      badge: 'DRAFT',
      playerName: 'Lamar Jackson',
      playerTeam: 'QB - BA; (7)',
      playerImage: '/assets/images/person.png',
      points: 300.3,
      int: 300.6,
      passYd: 2.2,
      passRtg: 0.8,
      passTd: 0.0,
      passAtt: 32.1,
      adp: 1.1,
      rnk: 2,
      isFavorite: true,
    },
    {
      key: '4',
      position: 'QB',
      badge: 'DRAFT',
      playerName: 'Lamar Jackson',
      playerTeam: 'QB - BA; (7)',
      playerImage: '/assets/images/person.png',
      points: 300.3,
      int: 300.6,
      passYd: 2.2,
      passRtg: 0.8,
      passTd: 0.0,
      passAtt: 32.1,
      adp: 1.1,
      rnk: 2,
      isFavorite: true,
    },
  ];
  return (
    <div>
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League - Live Draft</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
       6 team PPR • 2024 Season
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#3E3E3E]">
            <span className="text-white text-sm md:text-base font-medium">DRAFT BOARD</span>
          </div>
        </div>
      </div>
      {/* Round */}
      <div className="bg-lightgray p-5 rounded-[18px] mt-4 flex items-center justify-between">
        <div>
            <div className="text-lg font-semibold text-gray mb-2">
                Round
            </div>
            <p className="font-medium text-lg">
                Round 1 • Pick 1
            </p>
        </div>
        <div>
            <div className="text-lg font-semibold text-gray mb-2">
              Last Pick
            </div>
            <p className="font-medium text-lg">
                TJ Hokenson - Pick 33
            </p>
        </div>
        <div>
            <div className="text-lg font-semibold text-gray mb-2">
               You Are
            </div>
            <p className="font-medium text-lg">
               Team 1 • Picking Now
            </p>
        </div>
      </div>
      {/*  */}
          <Row
              gutter={[
                { xs: 16, sm: 24, md: 22 },
                { xs: 16, sm: 24, md: 22 },
              ]}
              className="mt-4"
            >
              {/* Left Column - Draft Section */}
              <Col xs={24} lg={12}>
              <div className="bg-lightgray p-5 rounded-[18px]">
               <div className="flex justify-between gap-12 mt-6">
                <div className="">
                    <img src="/assets/images/team-logo.png" className="h-[115px] w-24" alt="team-logo" />
                </div>
                <div className=" relative">
                    <div className="flex flex-col justify-center items-center gap-2 relative z-20">
                        <div className="text-sm">
                            Time Remaining
                        </div>
                        <div className="text-6xl">01:59</div>
                        <div className="text-sm text-gray">
                            Auto-pick after timer expires
                        </div>
                    <div className="border border-[#3E3E3E] rounded-md h-20 w-[300px] absolute -top-2"></div>
                    </div>
                </div>
                <div></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-linear-to-b from-[#1E1E1E] via-[#3B3B3B] rounded-xl border border-[#3e3e3e] p-3 flex justify-between gap-4">
                    <div className="flex flex-col gap-1 justify-center">
                        <div className="font-semibold text-sm">
                            Team 1
                        </div>
                        <p className="text-xs text-[#01C710] font-medium">Picking Now • 1 min left</p>
                    </div>
                    <div>
                        <img src="/assets/images/team-logo-red.png" className="h-16 min-w-12 rounded-3xl" alt="team-logo" />
                    </div>
                </div>
                <div className="bg-linear-to-b from-[#1E1E1E] via-[#3B3B3B] rounded-xl border border-[#3e3e3e] p-3 flex justify-between gap-4">
                    <div className="flex flex-col gap-1 justify-center">
                        <div className="font-semibold text-sm">
                            Team 2
                        </div>
                        <p className="text-xs text-[#FFC400] font-medium">On Deck</p>
                    </div>
                    <div>
                        <img src="/assets/images/team-logo-red.png" className="h-16 min-w-12 rounded-3xl" alt="team-logo" />
                    </div>
                </div>
                <div className="bg-linear-to-b from-[#1E1E1E] via-[#3B3B3B] rounded-xl border border-[#3e3e3e] p-3 flex justify-between gap-4">
                    <div className="flex flex-col gap-1 justify-center">
                        <div className="font-semibold text-sm">
                            Team 3
                        </div>
                        <p className="text-xs text-[#FF0000] font-medium">In The Hole</p>
                    </div>
                    <div>
                        <img src="/assets/images/team-logo-red.png" className="h-16 min-w-12 rounded-3xl" alt="team-logo" />
                    </div>
                </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-linear-to-b from-[#1E1E1E] via-[#3B3B3B] border border-[#3e3e3e] flex items-center justify-center rounded-md font-semibold text-sm uppercase p-3">
                  team 4
                </div>
                <div className="bg-linear-to-b from-[#1E1E1E] via-[#3B3B3B] border border-[#3e3e3e] flex items-center justify-center rounded-md font-semibold text-sm uppercase p-3">
                  team 5
                </div>
                <div className="bg-linear-to-b from-[#1E1E1E] via-[#3B3B3B] border border-[#3e3e3e] flex items-center justify-center rounded-md font-semibold text-sm uppercase p-3">
                  team 6
                </div>
                <div className="bg-linear-to-b from-[#1E1E1E] via-[#3B3B3B] border border-[#3e3e3e] flex items-center justify-center rounded-md font-semibold text-sm uppercase p-3">
                  team 7
                </div>
               </div>
              </div>
              </Col>
              <Col xs={24} lg={12}>
               <div className="bg-linear-to-b border border-secondgray from-[#191818] to-[#2E2E2E] rounded-[18px] p-5 ">
              
                
                <Table
                  columns={[
                    {
                      title: '',
                      dataIndex: 'label',
                      key: 'label',
                      render: (text) => <span className="text-sm text-[#FAAF15]">{text}</span>,
                    },
                    ...rosterColumns,
                  ]}
                  dataSource={rosterData}
                  pagination={false}
                  className="rosters-progress-table"
                  bordered={false}
                />
               </div>
     {/*  search */}

      <div className="flex items-center gap-2">
        <div className="relative flex-1 mt-4">
          <input
            type="text"
            placeholder="Search players"
            className="w-full ps-10 pe-4 h-[45px] rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] text-white placeholder-gray focus:outline-none"
          />
          <span className="absolute left-3 text-xl top-[26px] transform -translate-y-1/2">
           {/* add the search icon here iconify */}
           <iconify-icon icon="mynaui:search"></iconify-icon>

          </span>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-[#F9B816] text-black h-[45px] px-4">
          All
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] h-[45px] px-4">
         QB
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] h-[45px] px-4">
         RB
        </div>
        <div className="flex items-center justify-center rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] h-[45px] px-4">
         WR
        </div>
      </div>

        <div className="player-watch-wrapper mt-6">
          <div className="flex items-center justify-between mb-4 px-5">
            <div className="flex-1">
              <Tabs
                      activeKey={activeTab}
                      onChange={setActiveTab}
                      className="player-watch-tabs"
                      items={[
                        {
                          key: '1',
                          label: 'PROJECTIONS',
                          children: (
                            <div className="player-stats-container mt-4">
                              <div className="player-stats-header">
                                <div className="stat-col header-label"></div>
                                <div className="stat-col header-image"></div>
                                <div className="stat-col header-stat">POINTS</div>
                                <div className="stat-col header-stat">INT</div>
                                <div className="stat-col header-stat">PASS YD</div>
                                <div className="stat-col header-stat-combined">PASS RTG<br/>PASS TD</div>
                                <div className="stat-col header-stat">PASS ATT</div>
                                <div className="stat-col header-badges"></div>
                                <div className="stat-col header-action"></div>
                              </div>
                              {playerStatsData.map((player) => (
                                <div key={player.key} className="player-stats-row">
                                  <div className="stat-col player-position">
                                    <span className="badge-position">{player.position}</span>
                                    <span className="badge-draft">{player.badge}</span>
                                  </div>
                                  <div className="stat-col player-image-col">
                                    <img src={player.playerImage} alt={player.playerName} className="player-avatar" />
                                  </div>
                                  <div className="stat-col player-info-combined">
                                    <div className="player-name">{player.playerName}</div>
                                    <div className="player-team">{player.playerTeam}</div>
                                    <div className="stat-value">{player.points}</div>
                                  </div>
                                  <div className="stat-col stat-value">{player.int}</div>
                                  <div className="stat-col stat-value">{player.passYd}</div>
                                  <div className="stat-col stat-value-combined">
                                    <div>{player.passRtg}</div>
                                    <div>{player.passTd}</div>
                                  </div>
                                  <div className="stat-col stat-value">{player.passAtt}</div>
                                  <div className="stat-col player-badges">
                                    <span className="badge-adp">ADP<br/>{player.adp}</span>
                                    <span className="badge-rnk">RNK<br/>{player.rnk}</span>
                                  </div>
                                  <div className="stat-col player-star">
                                    <iconify-icon icon="mdi:star" className={player.isFavorite ? 'star-active' : ''} style={{fontSize: '24px'}}></iconify-icon>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ),
                        },
                        {
                          key: '2',
                          label: 'STATS',
                          children: (
                            <div className="player-stats-container mt-4">
                              <div className="player-stats-header">
                                <div className="stat-col header-label"></div>
                                <div className="stat-col header-image"></div>
                                <div className="stat-col header-stat">POINTS</div>
                                <div className="stat-col header-stat">INT</div>
                                <div className="stat-col header-stat">PASS YD</div>
                                <div className="stat-col header-stat-combined">PASS RTG<br/>PASS TD</div>
                                <div className="stat-col header-stat">PASS ATT</div>
                                <div className="stat-col header-badges"></div>
                                <div className="stat-col header-action"></div>
                              </div>
                              {playerStatsData.map((player) => (
                                <div key={player.key} className="player-stats-row">
                                  <div className="stat-col player-position">
                                    <span className="badge-position">{player.position}</span>
                                    <span className="badge-draft">{player.badge}</span>
                                  </div>
                                  <div className="stat-col player-image-col">
                                    <img src={player.playerImage} alt={player.playerName} className="player-avatar" />
                                  </div>
                                  <div className="stat-col player-info-combined">
                                    <div className="player-name">{player.playerName}</div>
                                    <div className="player-team">{player.playerTeam}</div>
                                    <div className="stat-value">{player.points}</div>
                                  </div>
                                  <div className="stat-col stat-value">{player.int}</div>
                                  <div className="stat-col stat-value">{player.passYd}</div>
                                  <div className="stat-col stat-value-combined">
                                    <div>{player.passRtg}</div>
                                    <div>{player.passTd}</div>
                                  </div>
                                  <div className="stat-col stat-value">{player.passAtt}</div>
                                  <div className="stat-col player-badges">
                                    <span className="badge-adp">ADP<br/>{player.adp}</span>
                                    <span className="badge-rnk">RNK<br/>{player.rnk}</span>
                                  </div>
                                  <div className="stat-col player-star">
                                    <iconify-icon icon="mdi:star" className={player.isFavorite ? 'star-active' : ''} style={{fontSize: '24px'}}></iconify-icon>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ),
                        },
                      ]}
                    />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#3E3E3E] bg-linear-to-b from-[#191818] to-[#2E2E2E] text-white hover:border-yellow-400 transition-colors whitespace-nowrap ml-4">
              <iconify-icon icon="tabler:arrows-sort"></iconify-icon>
              <span className="text-sm font-medium">SORT BY</span>
            </button>
          </div>
        </div>

              </Col>
            </Row>
    </div>
  )
}

export default PlayerWatch
