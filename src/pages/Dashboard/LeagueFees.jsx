
const LeagueFees = () => {
  return (
    <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
        Draft Settings - Fees
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848]">
            <span className="text-white text-sm md:text-base font-medium">Back</span>
          </div>
          <button className="yellow-button py-2! px-4! text-sm md:text-base!">
            Save 
          </button>
        </div>
      </div>
      <div className="bg-lightgray p-5 rounded-[18px] mt-4">
          <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
              Use FantasyBoss to collect league fees?
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-8 lg:h-10 lg:text-base!">yes</button>
                <button className="yellow-outline-button h-8 lg:h-10 lg:text-base!">No</button>
          
            </div>
        </div>
          <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
          Require Payment before joining league?
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-8 lg:h-10 lg:text-base!">yes</button>
                <button className="yellow-outline-button h-8 lg:h-10 lg:text-base!">No</button>
          
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4">
            <div className="font-semibold text-lg mb-4">
            Enable Side Prize Pool
            </div>
            <div className="flex items-center gap-2">
                <button className="yellow-button h-8 lg:h-10 lg:text-base!">yes</button>
                <button className="yellow-outline-button h-8 lg:h-10 lg:text-base!">No</button>
            </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
            Enable Side Prize Pool
            </div>
              <div className="border border-yellow rounded-md h-8 lg:h-12 w-[102px] flex items-center justify-center lg:text-xl font-medium">
                $100
              </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
          Side Pool Buy In
            </div>
              <div className="border border-yellow rounded-md h-8 lg:h-12 w-[102px] flex items-center justify-center lg:text-xl font-medium">
                $25
              </div>
        </div>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg mb-4">
          Side Pool Buy In
            </div>
              <div className="border border-yellow rounded-md h-8 lg:h-12 w-[102px] flex items-center justify-center lg:text-xl font-medium">
                $125
              </div>
        </div>
      </div>
    </div>
  )
}

export default LeagueFees
