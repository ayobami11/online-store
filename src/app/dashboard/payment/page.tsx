import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

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

export default function PaymentPage() {
  return (
    <section className="bg-white rounded-2xl w-full max-w-[1034px] m-6 py-4 px-6 self-start">
      <header className="flex items-center gap-4 mb-6">
        <Button asChild variant="ghost">
          <Link href="/dashboard">
            <ArrowLeft />
          </Link>
        </Button>
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
      </header>

      <div className="space-y-7">
        {Array.from({ length: 15 }, (_, i) => (
          <TransactionRow key={i} />
        ))}
      </div>
    </section>
  );
}
