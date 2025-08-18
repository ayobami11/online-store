import { Header } from "@/app/dashboard/header";
import { Stats } from "@/app/dashboard/stats";
import { Activities } from "@/app/dashboard/activities";
import { Products } from "@/app/dashboard/products";
import { RecentTransactions } from "@/app/dashboard/recent-transactions";
import { Footer } from "@/app/dashboard/footer";

export default function Home() {
  return (
    <div className="w-full max-w-[1034px] mt-12 mb-3 font-open-sans">
      <Header />
      <main>
        <Stats />
        <div className="flex flex-col gap-4 m-6 md:flex-row">
          <Activities />
          <Products />
        </div>
        <RecentTransactions />
      </main>
      <Footer />
    </div>
  );
}
