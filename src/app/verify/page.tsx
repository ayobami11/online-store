import Image from "next/image";

import { EmailVerificationForm } from "@/app/verify/form";
import { Button } from "@/components/ui/button";

export default function EmailVerificationPage() {
  return (
    <div className="flex">
      <div className="relative h-screen w-full max-w-[600px] hidden md:block">
        <Image src="/assets/images/login-hero.png" alt="" fill />
      </div>
      <div className="text-center flex justify-center w-full py-20 px-10">
        <div className="max-w-[464px]">
          <header className="mb-10">
            <h1 className="text-[#212121] font-bold text-4xl mb-2">
              Email Verification
            </h1>
            <p className="text-[#666666] text-sm">
              Please enter the verification code sent to s************@gmail.com
            </p>
          </header>
          <main>
            <EmailVerificationForm />

            <p className="text-center">
              Didn&apos;t receive <abbr title="One-time password">OTP</abbr>?
              <Button variant="link" className="text-red cursor-pointer -ml-2">
                Resend OTP
              </Button>
              
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
