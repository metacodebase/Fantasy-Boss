const MatchupCard = ({ matchup }) => {
  return (
    <div className="bg-[#383633] rounded-lg mb-6">
      <div className="grid grid-cols-3 gap-4 items-stretch">
        {/* Left Players */}
        <div className="flex flex-col p-1.5 lg:p-5 justify-center">
          {matchup.leftPlayers.map((player, index) => (
            <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-[#404040]" : ""}>
              <div className="text-white font-bold text-xs lg:text-sm mb-2">{player.name}</div>
              <div className="text-[#A8A8A8] text-[10px] lg:text-sm mb-3 font-medium">
                {player.position} - {player.team} ({player.week})
              </div>
              <div className="text-[#A8A8A8] font-medium text-sm mb-3">{player.points}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray text-[10px] lg:text-sm">{player.gameTime}</span>
                <img src="/assets/images/smoke-lines.svg" className="w-3" alt="smoke-lines" />
              </div>
              <div className="text-[#A8A8A8] text-[10px] lg:text-sm font-medium">
                VS <span className="text-[#A4D971]">{player.opponent}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Stats */}
        <div className="flex justify-center items-stretch ">
          <div
            className={`px-6 py-8 text-center text-[#fff] w-[90px] flex flex-col justify-center items-center ${matchup.centerStats.bgColor}`}
          >
            <div className="font-medium text-sm mb-2">{matchup.centerStats.position}</div>
            <div className="font-bold text-lg mb-3">{matchup.centerStats.difference}</div>
            <div className="font-medium text-lg">{matchup.centerStats.total}</div>
            <div className="text-sm font-medium mt-2">Total</div>
          </div>
        </div>

        {/* Right Players */}
        <div className="flex flex-col p-1.5 lg:p-5 justify-center text-right">
          {matchup.rightPlayers.map((player, index) => (
            <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-[#404040]" : ""}>
              <div className="text-white font-bold text-xs lg:text-sm mb-2">{player.name}</div>
              <div className="text-[#A8A8A8] text-[10px] lg:text-sm mb-3 font-medium">
                {player.position} - {player.team} ({player.week})
              </div>
              <div className="text-[#A8A8A8] font-medium text-[10px] lg:text-sm mb-3">{player.points}</div>
              <div className="flex items-center justify-end gap-2 mb-2">
                <img src="/assets/images/smoke-lines.svg" className="w-3" alt="smoke-lines" />
                <span className="text-gray text-[10px] lg:text-sm">{player.gameTime}</span>
              </div>
              <div className="text-[#A8A8A8] text-[10px] lg:text-sm font-medium">
                VS <span className="text-[#EB7E7A]">{player.opponent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchupCard;
