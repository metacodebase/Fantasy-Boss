import { Col, Modal, Row, Switch, Table, Tabs } from "antd"
import { useState } from "react"
import "./PlayerWatch.css"

const PlayerListViewSecond = () => {
  const [activeTab, setActiveTab] = useState('1')
  const [settingsModalOpen, setSettingsModalOpen] = useState(false); 
  const [draftModalOpen, setDraftModalOpen] = useState(false); 


  const playerStatsColumns = [
    {
      title: '',
      dataIndex: 'position',
      key: 'position',
      width: 100,
      align: 'left',
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm font-semibold text-center">{text}</span>
            <span className="badge-draft text-xs">{record.badge}</span>
          </div>
          <img src={record.playerImage} alt={record.playerName} className="player-avatar h-12 w-12 rounded" />
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'playerName',
      key: 'playerName',
      width: 150,
      render: (text, record) => (
        <div className="flex flex-col gap-0.5">
          <div className="player-name text-white font-semibold text-sm">{text}</div>
          <div className="player-team text-[#FAAF15] text-xs">{record.playerTeam}</div>
        </div>
      ),
    },
    {
      title: 'POINTS',
      dataIndex: 'points',
      key: 'points',
      width: 70,
      align: 'center',
      render: (text) => <span className="text-[#FBFBFB] text-xs">{text}</span>,
    },
    {
      title: 'INT',
      dataIndex: 'int',
      key: 'int',
      width: 70,
      align: 'center',
      render: (text) => <span className="text-[#FBFBFB] text-xs">{text}</span>,
    },
    {
      title: 'PASS YD',
      dataIndex: 'passYd',
      key: 'passYd',
      width: 70,
      align: 'center',
      render: (text) => <span className="text-[#FBFBFB] text-xs">{text}</span>,
    },
    {
      title: 'PASS RTG / PASS TD',
      dataIndex: 'passRtg',
      key: 'passRtgTd',
      width: 140,
      align: 'center',
      render: (text, record) => (
        <div className="flex flex-col gap-4 items-center">
          <div className="badge-stats-box">
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col items-center">
                <span className="text-xs font-semibold mb-2">ADP</span>
                <span className="text-white text-xs">{record.adp}</span>
              </div>
              <div className="h-12 bg-[#363636] w-0.5"></div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-semibold mb-2">RNK</span>
                <span className="text-white text-xs">{record.rnk}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-12 justify-center">
            <div className="flex flex-col items-center">
              <span className="text-white text-xs">{record.passRtg}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-xs">{record.passTd}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'PASS ATT',
      dataIndex: 'passAtt',
      key: 'passAtt',
      width: 100,
      align: 'center',
      render: (text, record) => (
        <div className="flex items-center flex-col justify-center gap-4 text-yellow">
          <iconify-icon icon="mdi:star" className={record.isFavorite ? 'text-yellow' : 'text-gray'} style={{fontSize: '20px'}}></iconify-icon>
          <span className="text-[#FBFBFB] text-xs">{text}</span>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'isFavorite',
      key: 'action',
      width: 0,
      align: 'center',
      render: () => null,
    },
  ];
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
            <button onClick={() => setDraftModalOpen(true)} className="text-white text-sm md:text-base font-medium">DRAFT BOARD</button>
          </div>
        </div>
      </div>
      {/* Round */}
      <div className="bg-lightgray p-5 rounded-[18px] mt-4 flex flex-wrap gap-6 lg:gap-0 lg:items-center justify-between">
        <div>
            <div className="text-sm lg:text-lg font-semibold text-gray mb-2">
               2nd nomination
            </div>
            <p className="font-medium text-sm lg:text-lg">
                Round 1 • Pick 1
            </p>
        </div>
        <div>
            <div className="text-sm lg:text-lg font-semibold text-gray mb-2">
              Last Pick
            </div>
            <p className="font-medium text-sm lg:text-lg">
                TJ Hokenson - Pick 33
            </p>
        </div>
        <div>
            <div className="text-sm lg:text-lg font-semibold text-gray mb-2">
               You Are
            </div>
            <p className="font-medium text-sm lg:text-lg">
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
               <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-20 mt-6">
                <div className="md:min-w-32 mx-auto lg:mx-0 flex items-center flex-col gap-2">
                    <img src="/assets/images/team-logo.png" className="h-[100px] lg:h-[115px] lg:min-w-24" alt="team-logo" />
                    <div className="font-semibold text-center lg:text-start">Team 1 Picking</div>
                </div>
               <div className="flex justify-between items-center border border-[#3E3E3E] rounded-xl p-5 mt-6 relative w-full">
                    <div className="font-medium md:text-2xl ms-12 lg:ms-16">
                      J. Allen <br />
                      BUF <br />
                      245 Proj Pts <br />
                      12.3 ADP
                    </div>
                    <div className="absolute -right-1 lg:-right-6 top-5 lg:top-7">
                      <img src="/assets/images/allen.png" className="h-[102px] lg:h-[140px]" alt="allen" />
                    </div>
                    <button className="rounded-xl bg-[#004B8B] h-10 w-[62px] lg:h-[60px] lg:w-[92px] absolute top-1/3 -left-4 lg:-left-12">QB</button>
              </div>
             
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

       <div className="flex lg:gap-2 gap-3 mt-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search players"
            className="w-full ps-10 pe-4 h-[45px]! rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] text-white placeholder-gray focus:outline-none"
          />
          <span className="absolute left-3 text-xl top-[26px] transform -translate-y-1/2">
           {/* add the search icon here iconify */}
           <iconify-icon icon="mynaui:search"></iconify-icon>
          </span>
        </div>
        <div className="flex items-center justify-center rounded-lg lg:rounded-xl bg-[#F9B816] text-black h-10 px-2 lg:px-4">
          All
        </div>
        <div className="flex items-center justify-center rounded-lg lg:rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] h-10 px-2 lg:px-4">
         QB
        </div>
        <div className="flex items-center justify-center rounded-lg lg:rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] h-10 px-2 lg:px-4">
         RB
        </div>
        <div className="flex items-center justify-center rounded-lg lg:rounded-xl bg-linear-to-b border border-[#3E3E3E] from-[#191818] to-[#2E2E2E] h-10 px-2 lg:px-4">
         WR
        </div>
      </div>

        <div className="player-watch-wrapper mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="table-container-wrapper relative">
              <Tabs
                      activeKey={activeTab}
                      onChange={setActiveTab}
                      className="player-watch-tabs"
                      items={[
                        {
                          key: '1',
                          label: 'PROJECTIONS',
                          children: (
                            <div className="mt-4">
                              <Table
                                columns={playerStatsColumns}
                                dataSource={playerStatsData}
                                pagination={false}
                                className="player-stats-table"
                                bordered={false}
                                size="small"
                                scroll={{ x: 700 }}
                              />
                            </div>
                          ),
                        },
                        {
                          key: '2',
                          label: 'STATS',
                          children: (
                            <div className="mt-4">
                              <Table
                                columns={playerStatsColumns}
                                dataSource={playerStatsData}
                                pagination={false}
                                className="player-stats-table"
                                bordered={false}
                                size="small"
                                scroll={{ x: 700 }}
                              />
                            </div>
                          ),
                        },
                      ]}
                    />
                    <button onClick={() => setSettingsModalOpen(true)} className="absolute top-0 right-0 flex border border-yellow items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-full text-xs lg:text-base"><iconify-icon icon="mingcute:transfer-4-line"></iconify-icon> Sort by</button>
            </div>

          </div>
        </div>

              </Col>
            </Row>

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
            <div className="w-6"></div>
                        <h2 className="text-center font-bold text-xl lg:text-2xl">Draft Settings</h2>
                 <button onClick={() => setSettingsModalOpen(false)} className=" text-white w-6 text-2xl">
                   <iconify-icon icon="gridicons:cross"></iconify-icon>
                 </button>
        </div>
          <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex items-center justify-between">
        
                <div className="">
                Results in Chat
                </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
          <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 flex items-center justify-between">
        
                <div className="">
                Auto Draft
                </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
          <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4 mb-6 flex items-center justify-between">
        
                <div className="">
               Auto Draft
                </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
     
        <button className="yellow-button w-full h-10 lg:h-[52px]">DONE</button>
    
               </Modal>

                 <Modal
        open={draftModalOpen}
        onCancel={() => setDraftModalOpen(false)}
        footer={null}
        centered
        width={550}
        className="settings-modal"
        closeIcon={
          null
        }
       
      >
            <div className="flex flex-col items-center justify-center text-center gap-6">
              <img src="/public/assets/images/draft.png" className="h-[222px]" alt="draft" />
              <div className="font-medium text-xl">
                Hold on there Cowboy. <br/>
                You&apos;re about to leave the draft!
              </div>
            </div>
                <div className="flex flex-col mt-5 gap-5">
                  <button className="yellow-outline-button h-[52px] w-full border-dashed!">
                              Exit Draft
                              </button>
                               <button className="yellow-button w-full h-[52px]">Stay In Draft</button>
                </div>
    
               </Modal>
    </div>
  )
}

export default PlayerListViewSecond
