import { z } from "zod";

export const signInSchema = z.object({
  identifier: z
    .string()
    .email("Invalid email address")
    .min(3, "Email must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
