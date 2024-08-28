import { FormField } from "./types";

export const buttons = [
  { label: "About" },
  { label: "Contact us" },
  { label: "Sign in" },
];

export const signUpformFields: FormField[] = [
  {
    name: "userName",
    label: "User Name:",
    placeholder: "Enter your user name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email:",
    placeholder: "Enter your email",
    type: "email",
    required: true,
  },
  {
    name: "number",
    label: "Phone Number:",
    placeholder: "Enter your phone number",
    type: "text",
    required: true,
  },
  {
    name: "firstName",
    label: "First Name:",
    placeholder: "Enter your first name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name:",
    placeholder: "Enter your last name",
    type: "text",
    required: true,
  },
  {
    name: "age",
    label: "Age:",
    placeholder: "Enter your age",
    type: "number",
    required: true,
  },
  {
    name: "gender",
    label: "Gender:",
    placeholder: "Select gender...",
    type: "select",
    required: true,
    options: ["Select gender...", "male", "female"],
  },
  {
    name: "agree",
    label: "I agree to the terms and conditions",
    type: "checkbox",
    required: true,
  },
];
