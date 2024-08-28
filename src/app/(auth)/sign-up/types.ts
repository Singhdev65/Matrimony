export type FormData = {
  userName: string;
  email: string;
  number: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  agree: boolean;
};

export type FormField = {
  name: keyof FormData;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "number" | "select" | "checkbox";
  required: boolean;
  options?: string[];
};
