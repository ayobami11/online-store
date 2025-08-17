import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { SignupForm } from "@/app/signup/form";

export default function SignupPage() {
  return (
    <div className="flex">
      <div className="relative min-h-screen w-full max-w-[600px] hidden md:block">
        <Image src="/assets/images/forgot-password-hero.png" alt="" fill />
      </div>
      <div className="flex justify-center items-center w-full p-10">
        <div className="max-w-[464px] w-full">
          <header className="mb-10">
            <h1 className="text-[#212121] font-bold text-4xl mb-2">
              Get Started
            </h1>
            <p className="text-[#666666] text-sm">
              Please enter the details to create an account.
            </p>
          </header>
          <main>
            <SignupForm />

            <p className="text-center">
              Already have an account?
              <Button asChild variant="link" className="text-red -ml-2">
                <Link href="/login">Login</Link>
              </Button>
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
