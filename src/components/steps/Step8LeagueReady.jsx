import "./steps.css"

const Step8LeagueReady = ({ leagueData, onFinish, onBack }) => {
  return (
    <div className="step-container">
      <div className="step-header">
        <button onClick={onBack} className="btn-back">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h2 className="step-title">League Settings</h2>
      </div>

      <div className="step-content">
        <div className="ready-container">
          <div className="ready-icon">
            <iconify-icon icon="mdi:check-circle" width="96" height="96"></iconify-icon>
          </div>
          <h3 className="ready-title">Your League is ready!</h3>
          <p className="ready-description">
            Bravo! You've proven that even the most mundane tasks can be conquered with enough determination. 
            Now get out there and build a team! Or not, friends can win, nope are forever.
          </p>

          <div className="league-summary">
            <div className="summary-item">
              <span className="label">Size:</span>
              <span className="value">{leagueData.leagueSize}</span>
            </div>
            <div className="summary-item">
              <span className="label">Type:</span>
              <span className="value">{leagueData.leagueType?.toUpperCase()}</span>
            </div>
            <div className="summary-item">
              <span className="label">Draft:</span>
              <span className="value">{leagueData.draftType?.toUpperCase()}</span>
            </div>
            <div className="summary-item">
              <span className="label">Access:</span>
              <span className="value">{leagueData.isPublic ? "PUBLIC" : "PRIVATE"}</span>
            </div>
            <div className="summary-item">
              <span className="label">Collect Fees:</span>
              <span className="value">{leagueData.collectFees ? "Yes" : "No"}</span>
            </div>
          </div>

          <div className="ready-buttons">
            <button onClick={() => {}} className="btn-secondary">
              CONTINUE SETUP
            </button>
            <button onClick={onFinish} className="btn-primary">
              I'M DONE FOR NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step8LeagueReady
