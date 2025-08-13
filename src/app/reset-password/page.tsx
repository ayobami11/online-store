import Image from "next/image";

import { ResetPasswordForm } from "@/app/reset-password/form";

export default function ResetPasswordPage() {
  return (
    <div className="flex">
      <div className="relative h-screen w-full max-w-[600px] hidden md:block">
        <Image src="/assets/images/login-hero.png" alt="" fill />
      </div>
      <div className="flex justify-center items-center w-full py-5 px-10">
        <div className="max-w-[464px] w-full">
          <header className="mb-10">
            <h1 className="text-[#212121] font-bold text-4xl mb-2">
              Reset Password
            </h1>
            <p className="text-[#666666] text-sm">
              Please create a password and start using your account.
            </p>
          </header>
          <main>
            <ResetPasswordForm />
          </main>
        </div>
      </div>
    </div>
  );
}
