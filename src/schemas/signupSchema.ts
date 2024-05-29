import { z } from "zod";

export const fnameValidation = z.string({
  message: "first name must be String",
});

export const lnameValidation = z.string({
  message: "last name must be String",
});

export const usernameValidation = z
  .string({
    message: "user name must be String",
  })
  .max(10, { message: "Username should not exceed more than 10 characters" })
  .min(2, { message: "Username must be atleast 2 characters" });

export const emailValidation = z
  .string({
    message: "Email must be String",
  })
  .email({ message: "Invalid Email Address" });

export const passwordValidation = z
  .string({
    message: "Password must be String",
  })
  .min(8, { message: "Invalid Email Address" });

export const phoneValidation = z
  .string({
    message: "phone number must be String",
  })
  .min(10, { message: "Invalid Phone" })
  .max(13, { message: "Invalid Email Address" });

export const signUpValidation = z.object({
  fname: fnameValidation,
  lname: lnameValidation,
  email: emailValidation,
  phone: phoneValidation,
  password: passwordValidation,
});
