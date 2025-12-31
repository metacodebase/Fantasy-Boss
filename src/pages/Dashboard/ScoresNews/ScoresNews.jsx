import { Table } from "antd";
import "./ScoresNews.css";

const ScoresNews = () => {
  const draftData = {
    rounds: [
      {
        round: 1,
        picks: [
          { pick: 1, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 2, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 3, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 4, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 5, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 6, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 7, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 8, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 9, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 10, player: "D. Jackson", team: "Don Johnsons" },
        ]
      },
      {
        round: 2,
        picks: [
          { pick: 1, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 2, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 3, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 4, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 5, player: "D. Jackson", team: "Don Johnsons" },
          { pick: 6, player: "D. Jackson", team: "Don Johnsons" },
        ]
      }
    ]
  };

  // Table columns configuration
  const columns = [
    {
      title: "Pick #",
      dataIndex: "pick",
      key: "pick",
      align: "left",
      width: 100,
      render: (text) => <span className="text-white text-sm lg:text-base font-bold ms-2">{text}</span>,
    },
    {
      title: "Player",
      dataIndex: "player",
      key: "player",
      align: "left",
      render: (text) => <span className="text-white text-sm lg:text-base font-bold">{text}</span>,
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
      align: "right",
      render: (text) => <span className="text-white text-sm lg:text-base font-bold">{text}</span>,
    },
  ];

  return (
    <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Draft Results</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
           6 team PPR • 2021 Season
          </p>
        </div>
      </div>
    

      {/* Draft Results Container */}
      <div className="bg-lightgray rounded-[18px] p-4 md:p-6">
        {/* Draft Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6 pb-4 border-b border-[rgba(255,255,255,0.24)]">
          <h5 className="font-semibold text-sm md:text-lg text-white uppercase tracking-wide">Marks League</h5>
          <p className="text-[#AAAAAA] text-xs md:text-base">6-Team PPR • 2021</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6 pb-4 border-b border-[rgba(255,255,255,0.24)]">
          <h5 className="bg-[#3E3E3E] rounded-3xl px-4 py-2 font-medium">Marks League</h5>
          <p className="text-[#AAAAAA] text-xs md:text-base">Last Pick TJ Hockensen - Pick 33 </p>
        </div>

        {/* Rounds Section */}
        <div className="space-y-8">
          {draftData.rounds.map((roundData, roundIndex) => (
            <div key={roundIndex}>
              {/* Round Title */}
              <div className="flex items-center gap-2">
                  <h6 className="font-semibold text-base md:text-lg text-[#FABA17]">Round {roundData.round}</h6>
                  <div className="h-px flex-1 w-full bg-[rgba(255,255,255,0.24)]"></div>
              </div>

              {/* Desktop Table View */}
              <div className="md:block mt-4">
                <Table
                  columns={columns}
                  dataSource={roundData.picks.map((pick, index) => ({
                    ...pick,
                    key: index,
                  }))}
                  pagination={false}
                  className="draft-board-table"
                  bordered={false}
                  size="small"
                />
              </div>

          
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScoresNews
