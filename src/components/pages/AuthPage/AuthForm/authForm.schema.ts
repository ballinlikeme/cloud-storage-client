import { z } from "zod";

const baseSchema = z.object({
  email: z.string().email("Email must be valid").trim(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .trim(),
});

const signInSchema = baseSchema.extend({
  type: z.literal("sign in"),
  name: z.string().optional().nullable(),
  surname: z.string().optional().nullable(),
});

const signUpSchema = baseSchema.extend({
  type: z.literal("sign up"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .trim()
    .refine((name) => {
      const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return !format.test(name);
    }, "Name must not contain any special characters"),
  surname: z
    .string()
    .min(2, "Surname must be at least 2 characters long")
    .trim()
    .refine((surname) => {
      const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return !format.test(surname);
    }, "Surname must not contain any special characters"),
});

export const authSchema = z.union([signInSchema, signUpSchema]);

export type AuthType = z.infer<typeof authSchema>;
