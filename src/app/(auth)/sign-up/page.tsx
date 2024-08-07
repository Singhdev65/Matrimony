"use client";
import React, { useState } from "react";
import * as Styled from "./styles";
import { signIn } from "next-auth/react";
import Image from "next/image";
import SignupImage from "../../../Assets/Images/signup5.jpg";
import GoogleLogo from "../../../Assets/Images/googleLogo.png";
import AppleLogo from "../../../Assets/Images/appleLogo.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUpValidation } from "@/schemas/signupSchema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import GenericHeader from "../../../app/GenericComponents/GenericHeader/Header";
import { FamilyRestroomRounded } from "@mui/icons-material";
import GenericLoader from "@/app/GenericComponents/GenericLoader/GenericLoader";

type FormData = {
  userName: string;
  email: string;
  number: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  agree: boolean;
};

type FormField = {
  name: keyof FormData;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "number" | "select" | "checkbox";
  required: boolean;
  options?: string[];
};

const Signup: React.FC = () => {
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      agree: false,
    },
  });

  const [loading, setLoading] = useState(false);

  const buttons = [
    { label: "About" },
    { label: "Contact us" },
    { label: "Sign in" },
  ];
  const showSearch = false;

  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setLoading(true);
    console.log(data, "heydata");
    router.push("/Profile");
    setLoading(false);
  };

  const formFields: FormField[] = [
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

  return (
    <Styled.Outerdiv>
      <Image
        src={SignupImage}
        alt="Signup Image"
        layout="fill"
        objectFit="cover"
      />

      <div
        style={{
          backgroundColor: "#fff",
          position: "absolute",
          top: "0",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <GenericHeader buttons={buttons} showSearch={showSearch} />
      </div>

      {loading && <GenericLoader />}

      <Styled.Form onSubmit={form.handleSubmit(onSubmit)}>
        {formFields?.map((field) => (
          <Styled.InputContainer key={field.name}>
            {field.type === "checkbox" ? (
              <Styled.CheckboxContainer>
                <input
                  type="checkbox"
                  id={field.name}
                  {...form.register(field.name, { required: field.required })}
                />
                <Styled.CheckboxLabel>{field.label}</Styled.CheckboxLabel>
              </Styled.CheckboxContainer>
            ) : (
              <>
                <Styled.Label htmlFor={field.name}>{field.label}</Styled.Label>
                {field.type === "select" ? (
                  <Styled.Select
                    id={field.name}
                    {...form.register(field.name, { required: field.required })}
                  >
                    {field.options?.map((option, index) => (
                      <option key={option} value={index === 0 ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </Styled.Select>
                ) : (
                  <Styled.Input
                    id={field.name}
                    type={field.type}
                    {...form.register(field.name, { required: field.required })}
                    placeholder={field.placeholder}
                  />
                )}
              </>
            )}
            {form.formState.errors[field.name] && (
              <Styled.Error>
                {form.formState.errors[field.name]?.message}
              </Styled.Error>
            )}
          </Styled.InputContainer>
        ))}
        <input type="submit" />
      </Styled.Form>
    </Styled.Outerdiv>
  );
};

export default Signup;
