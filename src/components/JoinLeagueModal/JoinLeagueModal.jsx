import { Modal } from "antd"
import { useState } from "react"
import Step1JoinLeague from "./steps/Step1JoinLeague"
import Step2PaymentInfo from "./steps/Step2PaymentInfo"
import Step3NameTeam from "./steps/Step3NameTeam"
import "./JoinLeagueModal.css"

const JoinLeagueModal = ({ isOpen, onClose, leagueData }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [joinData, setJoinData] = useState({
    leagueInfo: leagueData || {},
    paymentMethod: null,
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    zipCode: "",
    teamName: "",
  })

  const steps = [
    "Join League",
    "Payment Info",
    "Name Team",
  ]

  const updateJoinData = (field, value) => {
    setJoinData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Final step - submit
      handleFinish()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFinish = () => {
    console.log("League joined with data:", joinData)
    onClose()
    setCurrentStep(0)
    setJoinData({
      leagueInfo: leagueData || {},
      paymentMethod: null,
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      zipCode: "",
      teamName: "",
    })
  }

  const handleModalClose = () => {
    onClose()
    setCurrentStep(0)
    setJoinData({
      leagueInfo: leagueData || {},
      paymentMethod: null,
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      zipCode: "",
      teamName: "",
    })
  }

  return (
    <Modal
      title={null}
      open={isOpen}
      onCancel={handleModalClose}
      footer={null}
      centered
      width={550}
      className="join-league-modal"
      closeIcon={null}
    >
      <div className="join-league-container">
        {currentStep === 0 && (
          <Step1JoinLeague
            joinData={joinData}
            updateJoinData={updateJoinData}
            onNext={handleNext}
            onClose={handleModalClose}
          />
        )}
        {currentStep === 1 && (
          <Step2PaymentInfo
            joinData={joinData}
            updateJoinData={updateJoinData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 2 && (
          <Step3NameTeam
            joinData={joinData}
            updateJoinData={updateJoinData}
            onNext={handleNext}
            onBack={handleBack}
            onFinish={handleFinish}
          />
        )}
      </div>
    </Modal>
  )
}

export default JoinLeagueModal
