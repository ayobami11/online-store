"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Copy } from "lucide-react";

import { toast } from "sonner";

export const Footer = () => {
  const referralCode = "https://www.shopazany/spencer244";

  const copyReferralCode = async () => {
    await navigator.clipboard.writeText(referralCode);

    toast("Referral code copied to clipboard.");
  };

  return (
    <footer className="bg-[#0081FE] m-6 p-4 flex flex-col gap-4 max-w-[1034px] rounded-2xl md:flex-row">
      <div className="w-full md:max-w-[534px]">
        <Label htmlFor="referral-code" className="text-white font-normal mb-4">
          Referral code
        </Label>
        <div className="relative bg-white rounded-[1.25rem]">
          <Input
            id="referral-code"
            type="url"
            value={referralCode}
            readOnly
            className="border-none text-sm text-[#242424] px-4 py-8"
          />
          <Button
            variant="ghost"
            className="text-red bg-white absolute top-1/2 -translate-y-1/2 right-0 flex items-center gap-x-3 cursor-pointer rounded-2xl"
            onClick={copyReferralCode}
          >
            Copy <Copy />
          </Button>
        </div>
      </div>
      <div className="bg-white w-full flex justify-center items-center gap-4 md:max-w-[400px] rounded-[1.25rem] self-end py-2">
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/images/whatsapp.svg"
            alt=""
            width={50}
            height={50}
            className="w-12.5 h-12.5 scale-75"
          />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/images/facebook.svg"
            alt=""
            width={50}
            height={50}
            className="w-12.5 h-12.5 scale-75"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/images/instagram.svg"
            alt=""
            width={50}
            height={50}
            className="w-12.5 h-12.5 scale-75"
          />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noreferrer noopener">
          <Image
            src="/assets/images/twitter.svg"
            alt=""
            width={50}
            height={50}
            className="w-12.5 h-12.5 scale-75"
          />
        </a>
      </div>
    </footer>
  );
};
