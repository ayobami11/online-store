import Image from "next/image";

export const TransactionRow = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-2 items-center">
        <Image
          src="/assets/images/withdrawal-icon.png"
          alt=""
          width={30}
          height={30}
        />
        <span>Withdrawal</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[#8D8D8D] text-xs">Date</span>
        <span className="text-sm">21 July</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[#8D8D8D] text-xs">Time</span>
        <span className="text-sm">09:00</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[#8D8D8D] text-xs">Amount</span>
        <span className="text-sm">₦ 500</span>
      </div>
    </div>
  );
};
