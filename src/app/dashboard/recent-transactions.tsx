import Link from "next/link";

import { Button } from "@/components/ui/button";

import { TransactionRow } from "@/app/dashboard/transaction-row";

export const RecentTransactions = () => {
  return (
    <section className="bg-white rounded-2xl max-w-[1034px] m-6 py-4 px-6">
      <header className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <Button variant="link" asChild>
          <Link href="/dashboard/payment" className="text-red">
            View all
          </Link>
        </Button>
      </header>

      <div className="space-y-7">
        {Array.from({ length: 6 }, (_, i) => (
          <TransactionRow key={i} />
        ))}
      </div>
    </section>
  );
};
