 
import { Col, Row, Select } from "antd";
import MatchupCard from "./MatchupCard";

const Matchup = () => {
  const weekOptions = [
    { label: "Week 1", value: "week1" },
    { label: "Week 2", value: "week2" },
    { label: "Week 3", value: "week3" },
    { label: "Week 4", value: "week4" },
    { label: "Week 5", value: "week5" },
    { label: "Week 6", value: "week6" },
    { label: "Week 7", value: "week7" },
    { label: "Week 8", value: "week8" },
    { label: "Week 9", value: "week9" },
    { label: "Week 10", value: "week10" },
  ];
  const plays = [
  { position: 'QB', count: null },
  { position: 'RB', count: 2 },
  { position: 'WR', count: 4 },
  { position: 'TE', count: null },
  { position: 'K', count: null },
  { position: 'DEF', count: null },
];

  // Matchup data with multiple players per card
  const matchupData = [
    {
      id: 1,
      leftPlayers: [
        {
          name: "Lamar Jackson",
          position: "QB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ],
      centerStats: {
        position: "QBs",
        difference: -10,
        total: 35,
        bgColor: "bg-[#3ECFBA]"
      },
      rightPlayers: [
        {
          name: "A. Rodgers",
          position: "QB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ]
    },
    {
      id: 2,
      leftPlayers: [
        {
          name: "Lamar Jackson",
          position: "WR",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "Lamar Jackson",
          position: "WR",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ],
      centerStats: {
        position: "WRs",
        difference: -10,
        total: 35,
        bgColor: "bg-[#3E67CF]"
      },
      rightPlayers: [
        {
          name: "A. Rodgers (1)",
          position: "WR",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "A. Rodgers (2)",
          position: "WR",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ]
    },
    {
      id: 3,
      leftPlayers: [
        {
          name: "Lamar Jackson",
          position: "TE/FLEX",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "Lamar Jackson",
          position: "TE/FLEX",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "Lamar Jackson",
          position: "TE/FLEX",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ],
      centerStats: {
        position: "TE/FLEX",
        difference: -10,
        total: 35,
        bgColor: "bg-[#CF823E]"
      },
      rightPlayers: [
        {
          name: "A. Rodgers",
          position: "TE/FLEX",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "A. Rodgers",
          position: "TE/FLEX",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "A. Rodgers",
          position: "TE/FLEX",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ]
    },
    {
      id: 4,
      leftPlayers: [
        {
          name: "Lamar Jackson",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "Lamar Jackson",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "Lamar Jackson",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "Lamar Jackson",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ],
      centerStats: {
    
        difference: (
          <><div className="flex flex-col">
             <div>B</div>
             <div>E</div>
             <div>N</div>
             <div>C</div>
             <div>H</div>
            </div></>
        ),
   
        bgColor: "bg-[#CF3E3E]"
      },
      rightPlayers: [
        {
          name: "A. Rodgers",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "A. Rodgers",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "A. Rodgers",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        },
        {
          name: "A. Rodgers",
          position: "RB",
          team: "BA",
          week: "7",
          points: 23.36,
          gameTime: "Sun 12:00 PM",
          opponent: "vs CAR",
          isPlaying: true
        }
      ]
    }
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between">
        <div>
            <h4 className="font-semibold text-base lg:text-2xl">Fanisko League Matchup</h4>
            <p className="text-gray text-base lg:text-lg font-medium">6- Team PPR • 2024</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848] ">
            <iconify-icon icon="lsicon:left-filled"></iconify-icon>
            <span className="text-white text-base font-medium">All Matchups</span>
            </div>
     
            <Select
              defaultValue="week4"
              options={weekOptions}
              className="week-select"
              suffixIcon={<iconify-icon icon="mdi:chevron-down"></iconify-icon>}
            />

        </div>
      </div>
      {/* matches */}
      <div className="bg-[#191818] rounded-[18px] p-5 mt-4">
        <img src="/assets/images/matchup-main.png" className="h-32 lg:h-[355px] rounded-xl w-full" alt="matchup main" />
          <Row  gutter={[
                      { xs: 16, sm: 32, md: 22 },
                      { xs: 16, sm: 32, md: 22 },
                    ]} className="justify-between">
                <Col xs={24} lg={10}>
                 <div className="font-medium text-base my-4">
                    Yet to play (10)
                 </div>
                 <div className="grid grid-cols-3 gap-2">
                    {plays.map((play, index) => (
                        <>
                        <div className="bg-[#050608] border border-secondgray rounded-md flex items-center justify-center text-base font-medium h-[42px]">{play.position}</div>
                        
                        </>
                    ))}
                 </div>
                </Col>
                <Col xs={24} lg={10}>
                 <div className="font-medium text-base my-4 text-end">
                    Yet to play (10)
                 </div>
                 <div className="grid grid-cols-3 gap-2">
                    {plays.map((play, index) => (
                        <>
                        <div className="bg-[#050608] border border-secondgray rounded-md flex items-center justify-center text-base font-medium h-[42px]">{play.position}</div>
                        
                        </>
                    ))}
                 </div>
                </Col>
            </Row>
      </div>
      {/* graph */}
      <div className="bg-[#191818] rounded-[18px] p-5 mt-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848]">
                   <span className="text-white text-base font-medium mx-auto">Week 4</span>
                </div>
                <div className="font-medium">
                    Position by position breakdown
                </div>
            </div>
            <div className="font-medium text-gray">Left: Mohamed • Right: Mark</div>
        </div>
        
        {/* Matchup Cards using Component */}
        {matchupData.map((matchup) => (
          <MatchupCard key={matchup.id} matchup={matchup} />
        ))}
      </div>
    </div>
  )
}

export default Matchup
