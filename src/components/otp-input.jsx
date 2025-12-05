"use client"

import { Input } from "antd"
import { useState } from "react"

export default function OTPInput({ length = 4, onChange, onComplete, disabled = false }) {
  const [otp, setOtp] = useState("")

  const handleChange = (value) => {
    const newValue = value.replace(/[^0-9]/g, "").slice(0, length)
    setOtp(newValue)
    onChange?.(newValue)

    if (newValue.length === length) {
      onComplete?.(newValue)
    }
  }

  return (
    <div className="w-full">
      <Input.OTP
        value={otp}
        onChange={handleChange}
        length={length}
        disabled={disabled}
        formatter={(str) => str.toUpperCase()}
        className="otp-input-container"
        inputClassName="otp-input-field"
        size="large"
      />
    </div>
  )
}
