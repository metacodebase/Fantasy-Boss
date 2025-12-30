

const Step2PaymentInfo = ({ joinData, updateJoinData, onNext, onBack }) => {


  const handlePaymentSelect = (method) => {
    updateJoinData("paymentMethod", method)
  }

  const isFormValid = () => {
    return (
   
      joinData.cardName.trim() &&
      joinData.cardNumber.trim() &&
      joinData.expiryDate.trim() &&
      joinData.securityCode.trim() &&
      joinData.zipCode.trim()
    )
  }

  return (
    <div>
  <div className="flex items-center justify-between my-5">
        <button onClick={onBack} className="text-white text-3xl">
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        <h4 className="text-2xl font-bold text-white">Pay</h4>
    <div className="placeholder"></div>
      </div>

      <div className="">
        {/* Payment Methods */}
        <div className="flex justify-center ">
            <img src="/assets/images/payments-type.png" className="h-20" alt="payment methods" />
        </div>
    

        {/* Payment Amount */}
        <div className="">
          <div className="font-medium text-lg">Payment amount</div>
          <div className="text-2xl lg:text-[44px] text-[#C9A621]">$10</div>
        </div>

        {/* Form Fields */}
        <div className="mb-6 flex flex-col gap-1">
          <label className="text-gray text-lg font-medium">Name on card</label>
          <input
            type="text"
            
            value={joinData.cardName}
            onChange={(e) => updateJoinData("cardName", e.target.value)}
            className="league-input"
          />
        </div>

        <div className="mb-6 flex flex-col gap-1">
          <label className="text-gray text-lg font-medium">Card number</label>
          <input
            type="text"
          
            value={joinData.cardNumber}
            onChange={(e) => updateJoinData("cardNumber", e.target.value)}
            className="league-input"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
   <div className="mb-6 flex flex-col gap-1">
            <label className="text-gray text-lg font-medium">Expiry date</label>
            <input
              type="text"
           
              value={joinData.expiryDate}
              onChange={(e) => updateJoinData("expiryDate", e.target.value)}
              className="league-input"
            />
          </div>
        <div className="mb-6 flex flex-col gap-1">
            <label className="text-gray text-lg font-medium">Security code</label>
            <input
              type="text"
        
              value={joinData.securityCode}
              onChange={(e) => updateJoinData("securityCode", e.target.value)}
              className="league-input"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-1">
          <label className="text-gray text-lg font-medium">Zip / Postal code</label>
          <input
            type="text"
       
            value={joinData.zipCode}
            onChange={(e) => updateJoinData("zipCode", e.target.value)}
            className="league-input"
          />
        </div>
      </div>

      <div className="mt-8">
        
        <button 
          onClick={onNext} 
          className="yellow-button w-full h-[52px]"
          disabled={!isFormValid()}
        >
          Pay
        </button>
      </div>
    </div>
  )
}

export default Step2PaymentInfo
