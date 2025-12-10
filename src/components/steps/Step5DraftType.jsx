import "./steps.css"

const Step5DraftType = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectDraft = (type) => {
    updateLeagueData("draftType", type)
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
          <h3 className="setting-title">Draft Type</h3>
          <div className="setting-icon">
            <iconify-icon icon="mdi:star-outline" width="64" height="64"></iconify-icon>
          </div>
          <p className="setting-subtitle">
            Curved, straight, or the biggest wallet. They&apos;re all good options. Just ask your mom.
          </p>
        </div>

        <div className="draft-options">
          {/* Snake Draft */}
          <button
            onClick={() => handleSelectDraft("snake")}
            className={`draft-option ${leagueData.draftType === "snake" ? "active" : ""}`}
          >
            <div className="draft-icon yellow">
              <iconify-icon icon="mdi:wave" width="48" height="48"></iconify-icon>
            </div>
            <span>SNAKE</span>
          </button>

          {/* Linear Draft */}
          <button
            onClick={() => handleSelectDraft("linear")}
            className={`draft-option ${leagueData.draftType === "linear" ? "active" : ""}`}
          >
            <div className="draft-icon white">
              <iconify-icon icon="mdi:minus" width="48" height="48"></iconify-icon>
            </div>
            <span>LINEAR</span>
          </button>

          {/* Auction Draft */}
          <button
            onClick={() => handleSelectDraft("auction")}
            className={`draft-option ${leagueData.draftType === "auction" ? "active" : ""}`}
          >
            <div className="draft-icon white">
              <iconify-icon icon="mdi:gavel" width="48" height="48"></iconify-icon>
            </div>
            <span>AUCTION</span>
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

export default Step5DraftType
