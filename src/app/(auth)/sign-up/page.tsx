"use client";
import React from "react";
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

  const buttons = [
    { label: "About" },
    { label: "Contact us" },
    { label: "Sign in" },
  ];
  const showSearch = false;

  const router = useRouter();

  const onSubmit = (data: FormData) => {
    console.log(data, "heydata");
    router.push("/Profile");
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

      <Styled.Form onSubmit={form.handleSubmit(onSubmit)}>
        <Styled.Input
          {...form.register("userName", { required: true })}
          placeholder="User Name"
        />
        {form.formState.errors.userName && (
          <Styled.Error>{form.formState.errors.userName.message}</Styled.Error>
        )}
        <Styled.Input
          {...form.register("email", { required: true })}
          placeholder="Email"
        />
        {form.formState.errors.email && (
          <Styled.Error>{form.formState.errors.email.message}</Styled.Error>
        )}

        <Styled.Input
          {...form.register("number", { required: true })}
          placeholder="Number"
        />
        {form.formState.errors.number && (
          <Styled.Error>{form.formState.errors.number.message}</Styled.Error>
        )}

        <Styled.Input
          {...form.register("firstName", { required: true })}
          placeholder="First Name"
        />
        {form.formState.errors.firstName && (
          <Styled.Error>{form.formState.errors.firstName.message}</Styled.Error>
        )}

        <Styled.Input
          {...form.register("lastName", { required: true })}
          placeholder="Last Name"
        />
        {form.formState.errors.lastName && (
          <Styled.Error>{form.formState.errors.lastName.message}</Styled.Error>
        )}

        <Styled.Input
          {...form.register("age", { required: true })}
          placeholder="Age"
        />
        {form.formState.errors.age && (
          <Styled.Error>{form.formState.errors.age.message}</Styled.Error>
        )}

        <Styled.Select {...form.register("gender", { required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Styled.Select>
        {form.formState.errors.gender && (
          <Styled.Error>{form.formState.errors.gender.message}</Styled.Error>
        )}

        <Styled.Label>
          <Styled.Input
            type="checkbox"
            {...form.register("agree", { required: true })}
          />
          I agree to the terms and conditions
        </Styled.Label>
        {form.formState.errors.agree && (
          <Styled.Error>{form.formState.errors.agree.message}</Styled.Error>
        )}
        <input type="submit" />
      </Styled.Form>
    </Styled.Outerdiv>
  );
};

export default Signup;

{
  /* <Image
src={SignupImage}
alt="Signup Image"
layout="fill"
objectFit="cover"
/> */
}
