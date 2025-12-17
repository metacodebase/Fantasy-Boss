import { Table } from "antd";

const StandingsTable = () => {
  const standingsData = [
    {
      key: "1",
      rank: 1,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "2",
      rank: 2,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "3",
      rank: 3,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "4",
      rank: 4,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "5",
      rank: 5,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "6",
      rank: 6,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "7",
      rank: 7,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "8",
      rank: 8,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "9",
      rank: 9,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
    {
      key: "10",
      rank: 10,
      team: "Toms Game",
      subtitle: "1 - 0 Waiver Priority 1",
      for: "166.23",
      against: "166.23",
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "rank",
      key: "rank",
      width: "60px",
      render: (text) => {
        let rankColor = "#AFAFAF";
        if (text >= 1 && text <= 4) rankColor = "#1DF92B";
        else if (text >= 5 && text <= 7) rankColor = "#F9D41B";
        else if (text >= 8 && text <= 10) rankColor = "#FA671A";

        return (
          <div className="flex items-center justify-center">
            <span
              className="text-3xl font-bold"
              style={{
                color: rankColor,
              }}
            >
              {text}
            </span>
          </div>
        );
      },
    },
    {
      title: "Standings",
      dataIndex: "team",
      key: "team",
      render: (text, record) => {
        let iconColor = "#1DF92B";
        if (record.rank === 2 || record.rank === 6 || record.rank === 7) iconColor = "#FA671A";

        return (
          <div>
            <div className="text-white font-bold text-[16px] flex items-center gap-2">
              {text}
              <span style={{ color: iconColor }}>  <iconify-icon icon="icon-park-solid:up-one"></iconify-icon></span>
            </div>
            <div className="text-gray text-xs md:text-sm">{record.subtitle}</div>
          </div>
        );
      },
    },
    {
      title: "For",
      dataIndex: "for",
      key: "for",
      width: "100px",
      render: (text) => (
        <span className="text-gray font-medium text-sm md:text-base">
          {text}
        </span>
      ),
    },
    {
      title: "Against",
      dataIndex: "against",
      key: "against",
      width: "120px",
      render: (text) => (
        <span className="text-gray font-medium text-sm md:text-base">
          {text}
        </span>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={standingsData}
      pagination={false}
      className="standings-table"
    />
  );
};

export default StandingsTable;
