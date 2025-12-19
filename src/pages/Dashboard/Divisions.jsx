import { Select, Switch } from "antd"

const Divisions = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
           League - Divisions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-linear-to-b from-lightgray via-[#333333] to-[#484848]">
            <span className="text-white text-sm md:text-base font-medium">Cancel</span>
          </div>
          <button className="yellow-button py-2! px-4! text-sm md:text-base!">
            Save
          </button>
        </div>
      </div>
         <div className="bg-lightgray p-5 rounded-[18px]">
         <h4 className="font-semibold text-2xl mb-6">Divisions Configuration</h4>
        <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
            <div className="font-semibold text-lg">
            Use Divisions?
            </div>
            <div><Switch className="custom-switch" defaultChecked  /></div>
        </div>
           <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">
                    Number of Divisions
                </div>
                <p className="text-gray">How many groups should the leave be split into?</p>
              </div>
              <div className="flex items-center gap-2">
                 <Select
                defaultValue="4"
                className="custom-ant-select"
                options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                ]}
                 />
                   <button className="h-9 md:h-10 w-9 md:w-10 rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
              </button>
              </div>
            </div>
           <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
             <div className="font-semibold">
                League Name
             </div>
              <div className="flex items-center gap-2">
                   <div className="border border-[#FAB717] rounded-lg w-[120px] py-2 flex items-center justify-center text-white font-medium">
                    ACF North
                   </div>
                      <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
              </div>
            </div>
           <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
             <div className="font-semibold">
                League Name
             </div>
              <div className="flex items-center gap-2">
                   <div className="border border-[#FAB717] rounded-lg w-[120px] py-2 flex items-center justify-center text-white font-medium">
                   ACF South
                   </div>
                      <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
              </div>
            </div>
           <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
             <div className="font-semibold">
                League Name
             </div>
              <div className="flex items-center gap-2">
                   <div className="border border-[#FAB717] rounded-lg w-[120px] py-2 flex items-center justify-center text-white font-medium">
                  ACF East
                   </div>
                      <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
              </div>
            </div>
           <div className="border-b border-[rgba(255,255,255,0.24)] pb-3 mt-4 flex items-center justify-between">
             <div className="font-semibold">
                League Name
             </div>
              <div className="flex items-center gap-2">
                   <div className="border border-[#FAB717] rounded-lg w-[120px] py-2 flex items-center justify-center text-white font-medium">
                  ACF West
                   </div>
                      <button className="h-9 md:h-10 w-9 md:w-10 bg-[#404040] rounded-full flex items-center justify-center text-yellow hover:bg-[#4a4a4a] transition-colors flex-shrink-0">
                <iconify-icon icon="entypo:pencil" className="text-lg md:text-xl"></iconify-icon>
              </button>
              </div>
            </div>
        
        </div>
    </div>
  )
}

export default Divisions
