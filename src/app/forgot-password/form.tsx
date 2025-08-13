"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ForgotPasswordFormSchema } from "@/utils/zod";

export const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof ForgotPasswordFormSchema>>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof ForgotPasswordFormSchema>) {
    // toast("You submitted the following values", {
    //   description: (
    //     <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form method="POST" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-16">
              <FormLabel htmlFor="email" className="font-normal">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  id="email"
                  placeholder="example@email.com"
                  className={`text-base bg-[#f7f7f7] placeholder:text-[#999999] ${
                    form.formState.errors.email
                      ? "border-red focus-visible:border-red focus-visible:ring-red/20"
                      : ""
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-red h-auto block py-2.5 w-full text-sm font-medium cursor-pointer"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
