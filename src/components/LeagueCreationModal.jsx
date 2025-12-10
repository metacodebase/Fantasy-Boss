import { Modal } from "antd"
import { useState } from "react"
import Step1CreateOrCopy from "./steps/Step1CreateOrCopy"
import Step2LeagueName from "./steps/Step2LeagueName"
import Step3LeagueSize from "./steps/Step3LeagueSize"
import Step4LeagueType from "./steps/Step4LeagueType"
import Step5DraftType from "./steps/Step5DraftType"
import Step6PublicPrivate from "./steps/Step6PublicPrivate"
import Step7CollectFees from "./steps/Step7CollectFees"
import Step8LeagueReady from "./steps/Step8LeagueReady"
import "./LeagueCreationModal.css"

/**
 * LeagueCreationModal - Complete multi-step league creation flow
 * 
 * Steps:
 * 0: Create or Copy League
 * 1: League Name
 * 2: League Size (6, 8, 10, 12, etc)
 * 3: League Type (Redraft or Keeper)
 * 4: Draft Type (Snake, Linear, Auction)
 * 5: Public or Private
 * 6: Collect Fees (Yes or No)
 * 7: League Ready (Summary)
 */

const LeagueCreationModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [leagueData, setLeagueData] = useState({
    action: null, // 'create' or 'copy'
    leagueName: "",
    leagueSize: null,
    leagueType: null, // 'redraft' or 'keeper'
    draftType: null, // 'snake', 'linear', 'auction'
    isPublic: null, // true or false
    collectFees: null, // true or false
    buyInAmount: 0,
  })

  const steps = [
    "Create or Copy",
    "League Name",
    "League Size",
    "League Type",
    "Draft Type",
    "Public/Private",
    "Collect Fees",
    "Ready",
  ]

  // Navigate to next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  // Navigate to previous step
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Update league data
  const updateLeagueData = (field, value) => {
    setLeagueData({
      ...leagueData,
      [field]: value,
    })
  }

  // Handle modal close and reset
  const handleModalClose = () => {
    setCurrentStep(0)
    setLeagueData({
      action: null,
      leagueName: "",
      leagueSize: null,
      leagueType: null,
      draftType: null,
      isPublic: null,
      collectFees: null,
      buyInAmount: 0,
    })
    onClose()
  }

  // Handle finish
  const handleFinish = () => {
    console.log("League Created:", leagueData)
    // API call would go here
    handleModalClose()
  }

  return (
    <Modal
      open={isOpen}
      onCancel={handleModalClose}
      footer={null}
      width={550}
      className="league-creation-modal"
      closeIcon={null}
      centered
    >
      <div className="league-creation-container">
        {/* Step 0: Create or Copy */}
        {currentStep === 0 && (
          <Step1CreateOrCopy
            leagueData={leagueData}
            updateLeagueData={updateLeagueData}
            onNext={handleNext}
            onClose={handleModalClose}
          />
        )}

        {/* Step 1: League Name */}
        {currentStep === 1 && (
          <Step2LeagueName
            leagueData={leagueData}
            updateLeagueData={updateLeagueData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {/* Step 2: League Size */}
        {currentStep === 2 && (
          <Step3LeagueSize
            leagueData={leagueData}
            updateLeagueData={updateLeagueData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {/* Step 3: League Type */}
        {currentStep === 3 && (
          <Step4LeagueType
            leagueData={leagueData}
            updateLeagueData={updateLeagueData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {/* Step 4: Draft Type */}
        {currentStep === 4 && (
          <Step5DraftType
            leagueData={leagueData}
            updateLeagueData={updateLeagueData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {/* Step 5: Public or Private */}
        {currentStep === 5 && (
          <Step6PublicPrivate
            leagueData={leagueData}
            updateLeagueData={updateLeagueData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {/* Step 6: Collect Fees */}
        {currentStep === 6 && (
          <Step7CollectFees
            leagueData={leagueData}
            updateLeagueData={updateLeagueData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {/* Step 7: League Ready */}
        {currentStep === 7 && (
          <Step8LeagueReady
            leagueData={leagueData}
            onFinish={handleFinish}
            onBack={handleBack}
          />
        )}
      </div>
    </Modal>
  )
}

export default LeagueCreationModal
