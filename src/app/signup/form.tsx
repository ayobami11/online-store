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

import { SignupFormSchema } from "@/utils/zod";

import { CircleCheck, CircleX, EyeIcon, EyeOffIcon } from "lucide-react";

export const SignupForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit() {
    toast(`An OTP code has been sent to ${form.getValues("email")} to verify your account.`);

    router.push("/verify");
  }

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-10"
      >
        <div className="space-y-4 mb-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="fullName" className="font-normal">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    id="fullName"
                    placeholder="Enter full name"
                    className={`text-base bg-[#f7f7f7] placeholder:text-[#999999] ${
                      form.formState.errors.fullName
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
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="font-normal">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="current-password" className="font-normal">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      aria-describedby="password-constraints"
                      autoComplete="current-password"
                      id="current-password"
                      placeholder="Enter password"
                      className={`text-base pr-12 bg-[#f7f7f7] placeholder:text-[#999999] ${
                        form.formState.errors.password
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
                      disabled={form.getValues("password").length === 0}
                      className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 rounded-full disabled:cursor-not-allowed"
                    >
                      {showPassword ? (
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
                        {showPassword ? "Hide" : "Show"} password
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormDescription id="password-constraints">
                  <span className="flex items-center gap-1 text-[11px]">
                    {form.getValues("password").length >= 8 ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    Minimum of 8 characters
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/[a-z]/.test(form.getValues("password")) ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    At least 1 Lowercase
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/[A-Z]/.test(form.getValues("password")) ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    At least 1 Uppercase
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/\d/.test(form.getValues("password")) ? (
                      <CircleCheck className="text-[#18B365] scale-75" />
                    ) : (
                      <CircleX className="text-[#F43249] scale-75" />
                    )}{" "}
                    At least 1 Number
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {/[^A-Za-z0-9]/.test(form.getValues("password")) ? (
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
                  className="font-normal"
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
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full disabled:cursor-not-allowed"
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
