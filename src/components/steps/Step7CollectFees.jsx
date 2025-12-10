import "./steps.css"

const Step7CollectFees = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectFees = (collectFees) => {
    updateLeagueData("collectFees", collectFees)
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
          <h3 className="setting-title">Use FantasyBoss to collect League fees?</h3>
          <div className="setting-icon">
            <iconify-icon icon="mdi:cash-multiple" width="64" height="64"></iconify-icon>
          </div>
          <p className="setting-subtitle">
            We're way more trustworthy than your cousin Vinny. And we break less cookies.
          </p>
        </div>

        <div className="fees-options">
          {/* Yes Option */}
          <button
            onClick={() => handleSelectFees(true)}
            className={`fees-option ${leagueData.collectFees === true ? "active" : ""}`}
          >
            <span>YES</span>
          </button>

          {/* No Option */}
          <button
            onClick={() => handleSelectFees(false)}
            className={`fees-option ${leagueData.collectFees === false ? "active" : ""}`}
          >
            <span>NO</span>
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

export default Step7CollectFees
