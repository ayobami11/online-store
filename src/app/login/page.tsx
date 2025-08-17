import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { LoginForm } from "@/app/login/form";

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="relative h-screen w-full max-w-[600px] hidden md:block">
        <Image src="/assets/images/login-hero.png" alt="" fill />
      </div>
      <div className="flex justify-center items-center w-full py-5 px-10">
        <div className="max-w-[464px] w-full">
          <header className="mb-10">
            <h1 className="text-[#212121] font-bold text-4xl mb-2">
              Hello, welcome back!
            </h1>
            <p className="text-[#666666] text-sm">
              Please create a password and start using your account.
            </p>
          </header>
          <main>
            <LoginForm />

            <p className="text-center">
              Don&apos;t have an account?
              <Button asChild variant="link" className="text-red -ml-2">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
