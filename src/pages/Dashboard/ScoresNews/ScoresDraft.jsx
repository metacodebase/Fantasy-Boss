import { Tabs, Table } from "antd"
import "./ScoresDraft.css"
import { useState } from "react"

const ScoresDraft = () => {
      const [activeTab, setActiveTab] = useState('1')

  const draftBoardData = [
    { key: '1', team: "John", qb: 1, rb: 2, wr: 2, te: 0, def: 0, k: 1 },
    { key: '2', team: "Mark", qb: 1, rb: 2, wr: 0, te: 0, def: 1, k: 1 },
    { key: '3', team: "Steve", qb: 1, rb: 3, wr: 2, te: 2, def: 0, k: 1 },
    { key: '4', team: "John", qb: 1, rb: 2, wr: 2, te: 0, def: 0, k: 1 },
    { key: '5', team: "Mike", qb: 1, rb: 0, wr: 3, te: 0, def: 0, k: 1 },
    { key: '6', team: "Jim", qb: 1, rb: 2, wr: 2, te: 0, def: 0, k: 1 },
    { key: '7', team: "Mike", qb: 1, rb: 2, wr: 2, te: 0, def: 0, k: 1 },
  ];

  const columns = [
    {
      title: 'Required',
      dataIndex: 'team',
      key: 'team',
      width: 120,
      render: (text) => <span className="team-cell">{text}</span>,
    },
    {
      title: '1\nQB',
      dataIndex: 'qb',
      key: 'qb',
      width: 80,
      align: 'center',
      render: (text) => <span className="stat-cell">{text}</span>,
    },
    {
      title: '2\nRB',
      dataIndex: 'rb',
      key: 'rb',
      width: 80,
      align: 'center',
      render: (text) => <span className="stat-cell">{text}</span>,
    },
    {
      title: '3\nWR',
      dataIndex: 'wr',
      key: 'wr',
      width: 80,
      align: 'center',
      render: (text) => <span className="stat-cell">{text}</span>,
    },
    {
      title: '1\nTE',
      dataIndex: 'te',
      key: 'te',
      width: 80,
      align: 'center',
      render: (text) => <span className="stat-cell">{text}</span>,
    },
    {
      title: '1\nDEF',
      dataIndex: 'def',
      key: 'def',
      width: 80,
      align: 'center',
      render: (text) => <span className="stat-cell">{text}</span>,
    },
    {
      title: '1\nK',
      dataIndex: 'k',
      key: 'k',
      width: 80,
      align: 'center',
      render: (text) => <span className="stat-cell">{text}</span>,
    },
  ];

  const proposeTradeContent = (
    <div className="draft-board-wrapper mt-6">
      <Table
        columns={columns}
        dataSource={draftBoardData}
        pagination={false}
        className="draft-board-table"
        bordered={false}
        size="small"
      />
    </div>
  );

  const budgetData = [
    { key: '1', avatar: '/assets/images/female-person.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
    { key: '2', avatar: '/assets/images/multiple-person-logo.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
    { key: '3', avatar: '/assets/images/female-person.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
    { key: '4', avatar: '/assets/images/multiple-person-logo.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
    { key: '5', avatar: '/assets/images/female-person.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
    { key: '6', avatar: '/assets/images/multiple-person-logo.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
    { key: '7', avatar: '/assets/images/female-person.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
    { key: '8', avatar: '/assets/images/multiple-person-logo.png', team: "Your Team", drafted: "3/15", avg: "$17 avg", spent: "$163", max: "$45 max" },
  ];

  const tradingBlockContent = (
    <div className="budgets-container mt-6">
      {budgetData.map((item) => (
        <div key={item.key} className="budget-row">
          {/* Avatar */}
          <div className="flex items-center gap-4">
              <div className="budget-avatar">
                <div className="avatar-circle"><img src={item.avatar} alt="avatar" /></div>
              </div>
              <div className="budget-team-info">
                <h6 className="text-sm lg:text-base font-bold text-[#FBFBFB]">{item.team}</h6>
                <p className="font-medium text-[#FBFBFB]">{item.drafted}<br/><span className="text-sm text-[#8B8484]">Drafted</span></p>
              </div>
          </div>

          {/* Team Info */}

          {/* Center Info */}
          <div className="">
            <p className="text-sm lg:text-base font-medium text-[#FBFBFB]">{item.avg}</p>
          </div>

          {/* Right Info */}
          <div className="text-right">
            <p className="text-sm lg:text-base font-bold text-[#FBFBFB]">{item.spent}</p>
            <p className="text-sm lg:text-base font-medium text-[#FBFBFB]">{item.max}<br/><span className="text-sm text-[#8B8484]">Remaining budget per player</span></p>
          </div>
        </div>
      ))}
    </div>
  );
    
  return (
    <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
            <div>
            <h4 className="font-semibold text-lg md:text-2xl text-white">Draft Board</h4>
            <p className="text-gray text-sm md:text-base font-medium mt-1">
            6 team PPR • 2021 Season
            </p>
            </div>
      </div>
      <div className="bg-linear-to-b from-lightgray via-[#333333] to-[#484848] rounded-[18px] p-4 md:p-5 border border-[#404040]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h5 className="text-base md:text-lg font-semibold text-white">Draft Board</h5>
            <p className="text-gray text-xs md:text-sm">Last Pick TJ Hockensen - Pick 33 </p>
          </div>
           <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          className="scores-tabs"
          items={[
            {
              key: '1',
              label: 'Draft Board',
              children: proposeTradeContent,
            },
            {
              key: '2',
              label: 'Budgets',
              children: tradingBlockContent,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default ScoresDraft
