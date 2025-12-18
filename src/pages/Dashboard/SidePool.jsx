
const SidePool = () => {
  const sidePoolItems = [
    { id: 1, title: "Best Starter", hasStart: true, hasEnd: true, hasPayout: true, payout: "$25" },
    { id: 2, title: "Best Waiver Pickup", hasStart: true, hasEnd: true, hasPayout: true, payout: "$25" },
    { id: 3, title: "Largest Win Margin", hasStart: true, hasEnd: true, hasPayout: true, payout: "$25" },
    { id: 4, title: "Best Record", hasStart: true, hasEnd: true, hasPayout: true, payout: "$25" },
    { id: 5, title: "Most Points", hasStart: true, hasEnd: true, hasPayout: true, payout: "$25" },
  ];
  return (
    <div>
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-white">Marks League</h4>
          <p className="text-gray text-sm md:text-base font-medium mt-1">
                 Draft Settings - Side Pool Options & Prizes
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
           <div className="bg-lightgray p-5 rounded-[18px]">
   
        {sidePoolItems.map((item) => (
          <div key={item.id}>
            {/* Duration Section */}
            <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
              <div className="font-semibold text-lg mb-4">
                {item.title} - Duration
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-[#050608] rounded-md border h-[74px] w-full border-yellow flex items-center px-4 text-white gap-4">
                  <span className="bg-[#3B3B3B] h-10 w-10 text-[#C0A172] text-2xl rounded-md flex items-center justify-center">
                    <iconify-icon icon="mdi:calendar-month"></iconify-icon>
                  </span>
                  <div className="h-10 w-0.5 bg-secondgray"></div>
                  <div>
                    <div className="text-start text-sm text-gray">Start:</div>
                    <div className="text-sm font-medium">Week 1</div>
                  </div>
                </button>
                <button className="bg-[#050608] rounded-md border h-[74px] w-full border-yellow flex items-center px-4 text-white gap-4">
                  <span className="bg-[#3B3B3B] h-10 w-10 text-[#C0A172] text-2xl rounded-md flex items-center justify-center">
                    <iconify-icon icon="mdi:calendar-month"></iconify-icon>
                  </span>
                  <div className="h-10 w-0.5 bg-secondgray"></div>
                  <div>
                    <div className="text-start text-sm text-gray">End:</div>
                    <div className="text-sm font-medium">Week 7</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Payout Section */}
            <div className="border-b border-[rgba(255,255,255,0.24)] pb-6 mt-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg">
                  {item.title} - Payout
                </div>
                <div className="border border-yellow rounded-md h-12 w-20 flex items-center justify-center text-xl font-medium text-white">
                  {item.payout}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidePool
