import Image from "next/image";

export const Stats = () => {
  return (
    <section className="bg-white p-4 m-6 flex flex-wrap justify-center gap-3 rounded-2xl">
      <div className="bg-[#F1F1FD] rounded-2xl flex flex-col gap-1 items-center py-3 min-w-[222px]">
        <Image
          src="/assets/images/total-income-icon.png"
          alt=""
          width={30}
          height={33}
        />
        <span className="text-[#A8A8A8]">Total Income</span>
        <span className="text-[#242424] text-[2rem]">₦50,000</span>
      </div>
      <div className="bg-[#FFF3F4] rounded-2xl flex flex-col gap-1 items-center py-3 min-w-[222px]">
        <Image
          src="/assets/images/total-withdrawal-icon.png"
          alt=""
          width={32}
          height={32}
        />
        <span className="text-[#A8A8A8]">Total Withdrawal</span>
        <span className="text-[#242424] text-[2rem]">₦30,000</span>
      </div>
      <div className="bg-[#EAF4FF] rounded-2xl flex flex-col gap-1 items-center py-3 min-w-[222px]">
        <Image
          src="/assets/images/available-balance-icon.png"
          alt=""
          width={32}
          height={32}
        />
        <span className="text-[#A8A8A8]">Available Balance</span>
        <span className="text-[#242424] text-[2rem]">₦20,000</span>
      </div>
      <div className="bg-[#FFF2D2] rounded-2xl flex flex-col gap-1 items-center py-3 min-w-[222px]">
        <Image
          src="/assets/images/number-of-referrals-icon.png"
          alt=""
          width={32}
          height={32}
        />
        <span className="text-[#A8A8A8]">Number of referrals</span>
        <span className="text-[#242424] text-[2rem]">150</span>
      </div>
    </section>
  );
};
