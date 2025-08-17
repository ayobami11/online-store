import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Products = () => {
  return (
    <section className="bg-white rounded-2xl text-[#242424] w-full max-w-100 p-6">
      <h2 className="font-semibold text-xl mb-6">List of Products</h2>
      <dl className="space-y-10">
        <div className="flex justify-between gap-5">
          <dt className="font-semibold">Shop Azany</dt>
          <dd>500</dd>
        </div>
        <div className="flex justify-between gap-5">
          <dt className="font-semibold">Azany Business</dt>
          <dd>500</dd>
        </div>
        <div className="flex justify-between gap-5">
          <dt className="font-semibold">AVC</dt>
          <dd>500</dd>
        </div>
      </dl>

      <Button
        asChild
        className="bg-red text-white w-full mt-8 mb-10 rounded-[0.625rem] cursor-pointer"
      >
        <Link href="/dashboard/products">View more</Link>
      </Button>
    </section>
  );
};
