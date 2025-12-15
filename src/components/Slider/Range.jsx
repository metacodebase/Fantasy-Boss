import { useState } from 'react'
import './Range.css'

const Range = () => {
  const [values, setValues] = useState([0, 100])
  const MIN = 0
  const MAX = 100

  const handleChange = (newValues) => {
    setValues(newValues)
  }

  return (
    <div className="range-container">
      <div className="range-wrapper">
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={values[0]}
          onChange={(e) => handleChange([Math.min(Number(e.target.value), values[1]), values[1]])}
          className="range-input range-input-left"
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={values[1]}
          onChange={(e) => handleChange([values[0], Math.max(Number(e.target.value), values[0])])}
          className="range-input range-input-right"
        />
        <div className="range-track">
          <div
            className="range-fill"
            style={{
              left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
              right: `${100 - ((values[1] - MIN) / (MAX - MIN)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="range-labels">
        <div className="range-label-left">
          <span className="label-text">${values[0]}</span>
        </div>
        <div className="range-label-right">
          <span className="label-text">${values[1]}</span>
        </div>
      </div>
    </div>
  )
}

export default Range
