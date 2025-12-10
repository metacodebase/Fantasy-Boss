import "./steps.css"

const Step1CreateOrCopy = ({ updateLeagueData, onNext, onClose }) => {
  return (
    <div className="step-container">
      <div className="step-header">
        <button onClick={onClose} className="btn-back">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>

      </div>
      <div className="relative">
        <h3 className="text-[32px] whitespace-nowrap font-bold uppercase absolute text-white left-1/2 top-2 -translate-x-1/2">CREATE OR JOIN A LEAGUE</h3>
       <img src="/assets/images/modal-background.png" className="h-[400px] w-full object-cover" alt="modal-background" />
      </div>

      <div className="step-content">
        <div className="text-white font-medium mb-3">Discover a league to join or start your own. Compete  alongside friends, family, or coworkers and find out who the real boss is.</div>
        <div className="options-grid">
          {/* Create League Option */}
          <button
            onClick={() => {
              updateLeagueData("action", "create")
              onNext()
            }}
            className="yellow-button h-[52px]"
          >
            Create a league
          </button>

          {/* Copy League Option */}
          <button
            onClick={() => {
              updateLeagueData("action", "copy")
              onNext()
            }}
            className="yellow-outline-button h-[52px]"
          >
         join a league
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default Step1CreateOrCopy
