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

import { LoginFormSchema } from "@/utils/zod";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";

export const LoginForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    toast.success("Login successful.");

    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-20"
      >
        <div className="mb-12">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel htmlFor="email" className="font-normal">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem className="mb-6">
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
                        className={`text-base bg-[#f7f7f7] pr-12 placeholder:text-[#999999] ${
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
                            className="w-[22px] h-[19px]"
                          />
                        ) : (
                          <EyeIcon
                            aria-hidden="true"
                            className="w-[22px] h-[19px]"
                          />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide" : "Show"} password
                        </span>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <Button
                  asChild
                  variant="link"
                  className="text-red text-sm ml-auto block w-fit"
                >
                  <Link href="/forgot-password">Forgot password?</Link>
                </Button>
              </>
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
