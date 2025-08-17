"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { EmailVerificationFormSchema } from "@/utils/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const EmailVerificationForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof EmailVerificationFormSchema>>({
    resolver: zodResolver(EmailVerificationFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof EmailVerificationFormSchema>) {
    toast.success("Account verification was successful.");

    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[464px] mb-6"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormControl>
                <InputOTP
                  autoFocus
                  maxLength={4}
                  pattern={REGEXP_ONLY_DIGITS}
                  onComplete={form.handleSubmit(onSubmit)}
                  {...field}
                >
                  <InputOTPGroup className="space-x-4 mb-4 mx-auto">
                    <InputOTPSlot
                      index={0}
                      className="!rounded first:rounded-l-md last:rounded-r-md p-6 data-[active=true]:border-red data-[active=true]:ring-red/50 bg-[#F6F4FF] border border-[#ECECEC]"
                    />
                    <InputOTPSlot
                      index={1}
                      className="!rounded first:rounded-l-md last:rounded-r-md p-6 data-[active=true]:border-red data-[active=true]:ring-red/50 bg-[#F6F4FF] border border-[#ECECEC]"
                    />
                    <InputOTPSlot
                      index={2}
                      className="!rounded first:rounded-l-md last:rounded-r-md p-6 data-[active=true]:border-red data-[active=true]:ring-red/50 bg-[#F6F4FF] border border-[#ECECEC]"
                    />
                    <InputOTPSlot
                      index={3}
                      className="!rounded first:rounded-l-md last:rounded-r-md p-6 data-[active=true]:border-red data-[active=true]:ring-red/50 bg-[#F6F4FF] border border-[#ECECEC]"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-red h-auto block py-2.5 w-full text-sm font-medium cursor-pointer"
        >
          Verify
        </Button>
      </form>
    </Form>
  );
};
