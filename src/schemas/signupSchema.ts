import { z } from "zod";

export const usernameValidation = z
  .string({
    message: "user name must be String",
  })
  .max(10, { message: "Username should not exceed more than 10 characters" })
  .min(2, { message: "Username must be atleast 2 characters" })
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const emailValidation = z
  .string({
    message: "Email must be String",
  })
  .email({ message: "Invalid Email Address" });

export const phoneValidation = z
  .string()
  .refine((val) => !isNaN(Number(val)), {
    message: "Phone number must be a number",
  })
  .refine((val) => val.length >= 10 && val.length <= 13, {
    message: "Invalid phone number length. Must be between 10 and 13 digits",
  });

export const fnameValidation = z
  .string()
  .min(1, "First name should not be empty");

export const lnameValidation = z
  .string()
  .min(1, "Last name should not be empty");

export const ageValidation = z.preprocess((val) => {
  if (typeof val === "string") {
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return val;
}, z.number({ message: "Age is required" }).min(18, "You must be at least 18 years old").max(80, "Invalid age"));

export const genderValidation = z.enum(["male", "female", "other"], {
  message: "Gender is required",
});

export const agreeValidation = z.boolean().refine((val) => val === true, {
  message: "You must agree to the terms",
});

// export const passwordValidation = z
//   .string({
//     message: "Password must be String",
//   })
//   .min(8, { message: "Invalid Email Address" });

export const signUpValidation = z.object({
  userName: usernameValidation,
  firstName: fnameValidation,
  lastName: lnameValidation,
  email: emailValidation,
  number: phoneValidation,
  age: ageValidation,
  gender: genderValidation,
  agree: agreeValidation,
});
