import { z } from "zod";

export const LoginFormSchema = z
  .object({
    email: z
      .email({
        error: "Please enter a valid email address.",
      })
      .max(30, {
        error: "Email cannot exceed 30 characters.",
      })
      .toLowerCase(),
    password: z
      .string()
      .min(8, {
        message: "Password must contain at least 8 characters.",
      })
      .max(64, {
        message: "Password cannot exceed 64 characters.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/\d/, {
        message: "Password must contain at least one number.",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
  })
  .required();

export const SignupFormSchema = z
  .object({
    fullName: z
      .string({
        error: "Please enter a valid name.",
      })
      .max(30, {
        error: "Name cannot exceed 30 characters.",
      })
      .trim(),
    email: z
      .email({
        error: "Please enter a valid email address.",
      })
      .max(30, {
        error: "Email cannot exceed 30 characters.",
      })
      .toLowerCase(),
    password: z
      .string()
      .min(8, {
        message: "Password must contain at least 8 characters.",
      })
      .max(64, {
        message: "Password cannot exceed 64 characters.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/\d/, {
        message: "Password must contain at least one number.",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Password must contain at least 8 characters.",
      })
      .max(64, {
        message: "Password cannot exceed 64 characters.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/\d/, {
        message: "Password must contain at least one number.",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match.",
    path: ["confirmPassword"],
  });

export const ForgotPasswordFormSchema = z
  .object({
    email: z
      .email({
        error: "Please enter a valid email address.",
      })
      .max(30, {
        error: "Email cannot exceed 30 characters.",
      })
      .toLowerCase(),
  })
  .required();

export const ResetPasswordFormSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, {
        message: "Password must contain at least 8 characters.",
      })
      .max(64, {
        message: "Password cannot exceed 64 characters.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/\d/, {
        message: "Password must contain at least one number.",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Password must contain at least 8 characters.",
      })
      .max(64, {
        message: "Password cannot exceed 64 characters.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/\d/, {
        message: "Password must contain at least one number.",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
  })
  .required()
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Password does not match.",
    path: ["confirmPassword"],
  });

export const EmailVerificationFormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});
