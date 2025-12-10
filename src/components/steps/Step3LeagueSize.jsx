import "./steps.css"

const Step3LeagueSize = ({ leagueData, updateLeagueData, onNext, onBack }) => {
  const sizes = [4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 32]

  const handleSelectSize = (size) => {
    updateLeagueData("leagueSize", size)
    setTimeout(onNext, 300) // Small delay for visual feedback
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
          <h3 className="setting-title">League Size</h3>
          <div className="setting-icon">
            <iconify-icon icon="mdi:ruler" width="64" height="64"></iconify-icon>
          </div>
          <p className="setting-subtitle">We&apos;d say size doesn&apos;t matter, but we&apos;d be lying.</p>
        </div>

        <div className="size-grid">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSelectSize(size)}
              className={`size-button ${leagueData.leagueSize === size ? "active" : ""}`}
            >
              {size}
            </button>
          ))}
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

export default Step3LeagueSize
