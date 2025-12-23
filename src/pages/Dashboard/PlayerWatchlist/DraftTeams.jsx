
import { Table } from "antd"
import "./DraftWatchlist.css"

const DraftTeams = () => {
  const teamsData = [
    {
      key: '1',
      position: 'QB',
      playerName: 'Jake Taylor',
      playerTeam: 'QB - BAL',
      pickNumber: '1.1',
    },
    {
      key: '2',
      position: 'QB',
      playerName: 'Jake Taylor',
      playerTeam: 'QB - BAL',
      pickNumber: '1.1',
    },
    {
      key: '3',
      position: 'QB',
      playerName: 'Jake Taylor',
      playerTeam: 'QB - BAL',
      pickNumber: '1.1',
    },
    {
      key: '4',
      position: 'QB',
      playerName: 'Jake Taylor',
      playerTeam: 'QB - BAL',
      pickNumber: '1.1',
    },
    {
      key: '5',
      position: 'QB',
      playerName: 'Jake Taylor',
      playerTeam: 'QB - BAL',
      pickNumber: '1.1',
    },
    {
      key: '6',
      position: 'QB',
      playerName: 'Jake Taylor',
      playerTeam: 'QB - BAL',
      pickNumber: '1.1',
    },
  ]

  const columns = [
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: 100,
      align: 'left',
      render: (text) => (
        <div className="text-white font-bold">{text}</div>
      ),
    },
    {
      title: 'Player',
      dataIndex: 'playerName',
      key: 'playerName',
      align: 'center',
      render: (text, record) => (
        <div className="flex flex-col gap-1 items-center">
          <div className="text-white font-medium">{text}</div>
          <div className="text-gray">{record.playerTeam}</div>
        </div>
      ),
    },
    {
      title: 'Pick #',
      dataIndex: 'pickNumber',
      key: 'pickNumber',
      width: 100,
      align: 'right',
      render: (text) => (
        <div className="text-white font-medium">{text}</div>
      ),
    },
  ]

  return (
    <div>
      <div className="bg-linear-to-b border border-secondgray from-[#191818] to-[#2E2E2E] rounded-[18px] p-5 watchlist-container">
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.24)] pb-3 mb-6">
          <h5 className="font-semibold text-base text-white">Teams</h5>
          <p className="text-gray text-xs">Last Pick TJ Hokensen - Pick 33</p>
        </div>
        
        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-lg text-white flex-1 text-center">Teams</h5>
          <div className="flex items-center gap-2">
            <span className="text-gray text-xs font-medium">FILTER</span>
            <img src="/assets/images/sheild.png" className="h-5 w-5" alt="filter" />
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={teamsData}
          pagination={false}
          className="watchlist-table draft-teams-table"
          bordered={false}
        />
      </div>
    </div>
  )
}

export default DraftTeams
