const TransactionsList = () => {
  const transactions = [
    { id: 1, type: "add", name: "Patrick Mahmos", team: "Tom's Team" },
    { id: 2, type: "remove", name: "Patrick Mahmos", team: "Sep 28, 3:04 am" },
    { id: 3, type: "add", name: "Patrick Mahmos", team: "Tom's Team" },
    { id: 4, type: "remove", name: "Patrick Mahmos", team: "Sep 28, 3:04 am" },
    { id: 5, type: "add", name: "Patrick Mahmos", team: "Tom's Team" },
    { id: 6, type: "remove", name: "Patrick Mahmos", team: "Sep 28, 3:04 am" },
    { id: 7, type: "add", name: "Patrick Mahmos", team: "Tom's Team" },
    { id: 8, type: "remove", name: "Patrick Mahmos", team: "Sep 28, 3:04 am" },
    { id: 9, type: "add", name: "Patrick Mahmos", team: "Tom's Team" },
    { id: 10, type: "remove", name: "Patrick Mahmos", team: "Sep 28, 3:04 am" },
  ];

  // Group transactions into pairs
  const groupedTransactions = [];
  for (let i = 0; i < transactions.length; i += 2) {
    groupedTransactions.push(transactions.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col gap-4">
      {groupedTransactions.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="border border-secondgray rounded-[18px] p-4 "
        >
          <div className="flex flex-col gap-3 md:gap-4">
            {group.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 text-lg flex items-center justify-center shrink-0 ${
                      transaction.type === "add"
                        ? "text-[#1DF92B]"
                        : " text-[#FF0000]"
                    }`}
                  >
                    <iconify-icon
                      icon={
                        transaction.type === "add"
                          ? "fa-solid:plus"
                          : "rivet-icons:minus"
                      }
                    ></iconify-icon>
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#3B3B3B] rounded-lg flex items-center justify-center shrink-0 text-[#C0A172] text-3xl">
                    <iconify-icon
                      icon="mdi:account"
                      className=""
                    ></iconify-icon>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm md:text-base">
                      {transaction.name}
                    </div>
                  </div>
                </div>
                <div
                  className={`whitespace-nowrap ml-2 md:ml-4 ${
                    transaction.type === "add"
                      ? "text-white font-medium text-base"
                      : "text-gray font-medium text-sm"
                  }`}
                >
                  {transaction.team}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;
