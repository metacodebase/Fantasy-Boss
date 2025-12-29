
import { Table } from "antd"
import "./DraftWatchlist.css"

const DraftWatchlist = () => {
  const watchlistData = [
    {
      key: '1',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
    {
      key: '2',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
    {
      key: '3',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
    {
      key: '4',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
    {
      key: '5',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
    {
      key: '6',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
    {
      key: '7',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
    {
      key: '8',
      badge: 'DRAFT',
      playerName: 'Deseon Jackson',
      playerPosition: 'WR - BAL',
      isFavorite: true,
    },
  ]

  const columns = [
    {
      title: '',
      dataIndex: 'badge',
      key: 'badge',
      width: 80,
      render: (text) => (
        <span className="badge-draft inline-block">{text}</span>
      ),
    },
    {
      title: '',
      dataIndex: 'playerName',
      key: 'playerName',
      width: 150,
      render: (text) => (
        <div className="text-white font-bold w-36">{text}</div>
      ),
    },
    {
      title: '',
      dataIndex: 'playerPosition',
      key: 'playerPosition',
      flex: 1,
      align: 'center',
      render: (text) => (
        <div className="text-xs lg:text-sm text-center">{text}</div>
      ),
    },
    {
      title: '',
      dataIndex: 'isFavorite',
      key: 'action',
      width: 60,
      align: 'center',
      render: (isFavorite) => (
        <div className="text-yellow">
            <iconify-icon icon="mdi:star" className={isFavorite ? 'text-yellow-400' : 'text-gray-500'} style={{fontSize: '20px'}}></iconify-icon>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League - Live Draft</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
            6 team PPR • 2024 Season
          </p>
        </div>
      </div>
      <div className="bg-linear-to-b border border-secondgray from-[#191818] to-[#2E2E2E] rounded-[18px] p-5 watchlist-container">
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.24)] pb-4 mb-4">
          <h5 className="font-semibold text-lg text-white">Watchlist</h5>
          <p className="text-gray text-sm">Last Pick TJ Hockenson - Pick 33</p>
        </div>
          <h5 className="text-start lg:text-center font-semibold text-lg text-white">Watchlist</h5>

        <Table
          columns={columns}
          dataSource={watchlistData}
          pagination={false}
          className="watchlist-table"
          bordered={false}
        />
      </div>
    </div>
  )
}

export default DraftWatchlist
