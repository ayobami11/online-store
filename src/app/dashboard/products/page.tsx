import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

export default function Products() {
  return (
    <section className="self-start bg-white rounded-2xl text-[#242424] w-full max-w-[950px] my-10 mx-8 px-6 pt-10 pb-20">
      <header className="flex items-center gap-x-8 mb-12">
        <Button asChild variant="ghost">
          <Link href="/dashboard">
            <ArrowLeft />
          </Link>
        </Button>
        <h2 className="font-semibold text-xl">Product List</h2>
      </header>
      <dl className="space-y-10 w-full max-w-135">
        <div className="flex justify-between gap-2">
          <dt className="font-semibold">Shop Azany</dt>
          <dd>500</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="font-semibold">Azany Business</dt>
          <dd>500</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="font-semibold">AVC</dt>
          <dd>500</dd>
        </div>
      </dl>
    </section>
  );
}
