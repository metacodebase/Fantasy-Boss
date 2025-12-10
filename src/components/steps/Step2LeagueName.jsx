import "./steps.css"

const Step2LeagueName = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleNameChange = (e) => {
    updateLeagueData("leagueName", e.target.value)
  }

  const handleSubmit = () => {
    if (leagueData.leagueName.trim()) {
      onNext()
    }
  }

  return (
    <div className="step-container">
      <div className="step-header">
        <button onClick={onBack} className="btn-back">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h4 className="text-2xl font-bold text-white">League Setup</h4>
    <div className="placeholder"></div>
      </div>

      <div className="step-content">
        <div className="form-group">
          <label className="text-lg font-medium text-gray">League Name</label>
          <input
            type="text"
            value={leagueData.leagueName}
            onChange={handleNameChange}
            className="league-input"
          />
        </div>

        <div className="info-box">
          <div className="info-icon">
            <iconify-icon icon="mdi:information-outline"></iconify-icon>
          </div>
          <div>
            <h4>Create a League and pick your settings to get started</h4>
            <p>Choose from a variety of scoring formats and league sizes to customize your experience</p>
          </div>
        </div>

        <button onClick={handleSubmit} className="btn-primary" disabled={!leagueData.leagueName.trim()}>
          CREATE
        </button>

        <div className="divider">or</div>

        <div className="copy-section">
          <h4>Copy an Existing League</h4>
          <div className="league-list">
            <div className="league-item">
              <span className="league-icon">🏆</span>
              <span>Toms Game</span>
              <span className="league-desc">Draft Strategy to beat Ton...</span>
              <button className="btn-copy">COPY</button>
            </div>
          </div>
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

export default Step2LeagueName
