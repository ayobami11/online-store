"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ResetPasswordFormSchema } from "@/utils/zod";

import { CircleCheck, CircleX, EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";

export const ResetPasswordForm = () => {
  const router = useRouter();

  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const form = useForm<z.infer<typeof ResetPasswordFormSchema>>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof ResetPasswordFormSchema>) {
    toast.success("Your password has been reset successfully.");

    router.push("/login");
  }

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form method="POST" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-12 space-y-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="new-password"
                  className="text-base font-normal"
                >
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative mb-3">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      aria-describedby="password-constraints"
                      autoComplete="new-password"
                      id="new-password"
                      className={`text-base bg-[#f7f7f7] pr-12 placeholder:text-[#999999] ${
                        form.formState.errors.newPassword
                          ? "border-red focus-visible:border-red focus-visible:ring-red/20"
                          : ""
                      }`}
                      {...field}
                    />
                    <Button
                      type="button"
                      id="toggle-password"
                      aria-label="Show password as plain text. Warning: this will display your password on the screen."
                      variant="ghost"
                      size="icon"
                      onClick={togglePasswordVisibility}
                      disabled={form.getValues("newPassword").length === 0}
                      className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 rounded-full disabled:cursor-not-allowed"
                    >
                      {showNewPassword ? (
                        <EyeOffIcon
                          aria-hidden="true"
                          className="w-[22px] h-[19px] text-[hsl(0,0%,57%)]"
                        />
                      ) : (
                        <EyeIcon
                          aria-hidden="true"
                          className="w-[22px] h-[19px] text-[hsl(0,0%,57%)]"
                        />
                      )}
                      <span className="sr-only">
                        {showNewPassword ? "Hide" : "Show"} password
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormDescription id="password-constraints">
                  <span className="flex items-center gap-1 text-[11px]">
                    {form.getValues("newPassword").length >= 8 ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    Minimum of 8 characters
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/[a-z]/.test(form.getValues("newPassword")) ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    At least 1 Lowercase
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/[A-Z]/.test(form.getValues("newPassword")) ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    At least 1 Uppercase
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/\d/.test(form.getValues("newPassword")) ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    At least 1 Number
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/[^A-Za-z0-9]/.test(form.getValues("newPassword")) ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    At least 1 Special character
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="confirm-new-password"
                  className="text-base font-normal"
                >
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      aria-describedby="password-constraints"
                      autoComplete="new-password"
                      id="confirm-new-password"
                      className={`text-base bg-[#f7f7f7] pr-12 placeholder:text-[#999999] ${
                        form.formState.errors.confirmPassword
                          ? "border-red focus-visible:border-red focus-visible:ring-red/20"
                          : ""
                      }`}
                      {...field}
                    />
                    <Button
                      type="button"
                      id="toggle-confirm-password"
                      aria-label="Show password as plain text. Warning: this will display your password on the screen."
                      variant="ghost"
                      size="icon"
                      onClick={toggleConfirmPasswordVisibility}
                      disabled={form.getValues("confirmPassword").length === 0}
                      className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 rounded-full disabled:cursor-not-allowed"
                    >
                      {showConfirmPassword ? (
                        <EyeOffIcon
                          aria-hidden="true"
                          className="w-[22px] h-[19px] text-[hsl(0,0%,57%)]"
                        />
                      ) : (
                        <EyeIcon
                          aria-hidden="true"
                          className="w-[22px] h-[19px] text-[hsl(0,0%,57%)]"
                        />
                      )}
                      <span className="sr-only">
                        {showConfirmPassword ? "Hide" : "Show"} password
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="bg-red h-auto block py-2.5 w-full text-sm font-medium cursor-pointer"
        >
          Continue
        </Button>
      </form>
    </Form>
  );
};
