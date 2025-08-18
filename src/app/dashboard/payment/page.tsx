import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

import { TransactionRow } from "@/app/dashboard/transaction-row";

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
