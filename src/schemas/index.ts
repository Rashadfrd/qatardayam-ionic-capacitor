import { z } from "zod";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Adam kimi email yaz"),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long." })
    .regex(passwordRules, {
      message:
        "Please create a stronger password",
    }),
});
export const registerSchema = z.object({
  email: z.string().min(1, "Email is required").email("Adam kimi email yaz"),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long." })
    .regex(passwordRules, {
      message:
        "Please create a stronger password",
    }),
  confirmPassword: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long." })
    .regex(passwordRules, {
      message:
        "Please create a stronger password",
    }),
}).refine((data)=>data.password === data.confirmPassword,{
  message:'Passwords must match',
  path:['confirmPassword']
});

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;
