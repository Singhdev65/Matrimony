"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as Styled from "./styles";
import { FormData } from "./types";
import { buttons, signUpformFields } from "./constant";
import { signUpValidation } from "@/schemas/signupSchema";
import SignupImage from "../../../Assets/Images/signup5.jpg";
import GenericHeader from "../../../app/GenericComponents/GenericHeader/Header";
import GenericLoader from "@/app/GenericComponents/GenericLoader/GenericLoader";

const Signup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

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

  const onSubmit = (data: FormData) => {
    setLoading(true);
    router.push("/Profile");
    setLoading(false);
  };

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
        {signUpformFields?.map((field) => (
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
