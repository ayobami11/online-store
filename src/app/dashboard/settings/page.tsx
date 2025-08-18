import { Stats } from "@/app/dashboard/stats";
import { Activities } from "@/app/dashboard/activities";
import { Products } from "@/app/dashboard/products";
import { Footer } from "@/app/dashboard/footer";

export default function SettingsPage() {
  return (
    <div className="w-full max-w-[1034px] mt-12 mb-3 font-open-sans">
      <header className="bg-white rounded-2xl p-4 m-6 mt-0">
        <h1 className="font-semibold text-[#242424] text-[2.5rem]">Settings</h1>
      </header>
      <main>
        <Stats />
        <div className="flex flex-col gap-4 m-6 md:flex-row">
          <Activities />
          <Products />
        </div>
      </main>
      <Footer />
    </div>
  );
}
