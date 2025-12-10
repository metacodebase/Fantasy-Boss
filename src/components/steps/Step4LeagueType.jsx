import "./steps.css"

const Step4LeagueType = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectType = (type) => {
    updateLeagueData("leagueType", type)
    setTimeout(onNext, 300)
  }

  return (
    <div className="step-container">
      <div className="step-header">
        <button onClick={onBack} className="btn-back">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h2 className="step-title">League Settings</h2>
      </div>

      <div className="step-content">
        <div className="setting-header">
          <h3 className="setting-title">League Type</h3>
          <div className="setting-icon">
            <iconify-icon icon="mdi:trophy-outline" width="64" height="64"></iconify-icon>
          </div>
          <p className="setting-subtitle">What&apos;s your league type? No judgement.</p>
        </div>

        <div className="options-flex">
          {/* Redraft Option */}
          <button
            onClick={() => handleSelectType("redraft")}
            className={`type-option ${leagueData.leagueType === "redraft" ? "active" : ""}`}
          >
            <div className="type-icon">
              <iconify-icon icon="mdi:refresh" width="48" height="48"></iconify-icon>
            </div>
            <span>REDRAFT</span>
          </button>

          {/* Keeper Option */}
          <button
            onClick={() => handleSelectType("keeper")}
            className={`type-option ${leagueData.leagueType === "keeper" ? "active" : ""}`}
          >
            <div className="type-icon">
              <iconify-icon icon="game-icons:american-football-ball" width="48" height="48"></iconify-icon>
            </div>
            <span>KEEPER</span>
          </button>
        </div>
      </div>

      <div className="step-footer">
        <button onClick={onBack} className="btn-secondary">
          Back
        </button>
      </div>
    </div>
  )
}

export default Step4LeagueType
