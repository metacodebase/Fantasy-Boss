import "./steps.css"

const Step6PublicPrivate = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const handleSelectAccess = (isPublic) => {
    updateLeagueData("isPublic", isPublic)
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
          <h3 className="setting-title">Public or Private</h3>
          <div className="setting-icon">
            <iconify-icon icon="mdi:eye-off-outline" width="64" height="64"></iconify-icon>
          </div>
          <p className="setting-subtitle">
            Let&apos;s face it, some things go on the mantle, others get hidden under the bed where grandma won&apos;t find them.
          </p>
        </div>

        <div className="access-options">
          {/* Private Option */}
          <button
            onClick={() => handleSelectAccess(false)}
            className={`access-option ${leagueData.isPublic === false ? "active" : ""}`}
          >
            <div className="access-icon">
              <iconify-icon icon="mdi:lock-outline" width="64" height="64"></iconify-icon>
            </div>
            <span>PRIVATE</span>
          </button>

          {/* Public Option */}
          <button
            onClick={() => handleSelectAccess(true)}
            className={`access-option ${leagueData.isPublic === true ? "active" : ""}`}
          >
            <div className="access-icon">
              <iconify-icon icon="mdi:lock-open-outline" width="64" height="64"></iconify-icon>
            </div>
            <span>PUBLIC</span>
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

export default Step6PublicPrivate
