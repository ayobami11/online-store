import Image from "next/image";

import { ForgotPasswordForm } from "@/app/forgot-password/form";

export default function ForgotPasswordPage() {
  return (
    <div className="flex">
      <div className="relative h-screen w-full max-w-[600px] hidden md:block">
        <Image src="/assets/images/forgot-password-hero.png" alt="" fill />
      </div>
      <div className="flex justify-center w-full p-10">
        <div className="max-w-[464px]">
          <header className="mb-10">
            <h1 className="text-[#212121] font-bold text-4xl mb-2">
              Forgot Password
            </h1>
            <p className="text-[#666666] text-sm">
              Enter your email or phone number and we will send you an{" "}
              <abbr title="One-time password">OTP</abbr> to reset your password.
            </p>
          </header>
          <main>
            <ForgotPasswordForm />
          </main>
        </div>
      </div>
    </div>
  );
}
