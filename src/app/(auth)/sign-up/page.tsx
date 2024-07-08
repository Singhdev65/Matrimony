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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      {/* <Styled.SignupContainer>
        <Styled.RightSection>
          <Image
            src={SignupImage}
            alt="Signup Image"
            layout="fill"
            objectFit="cover"
          />
        </Styled.RightSection>

        <Styled.LeftSection>
          <Styled.GetStarted>Get Started</Styled.GetStarted>
          <br />
          <Styled.Form
          //   onSubmit={handleSubmit}
          >
            <Styled.Label>
              User Name:
              <Styled.Input
                type="text"
                name="first_name"
                // value={formData.first_name}
                // onChange={handleChange}
                required
                placeholder="Enter User Name"
              />
            </Styled.Label>

            <Styled.Label>
              Bride/Groom Name:
              <Styled.Input
                type="text"
                name="first_name"
                // value={formData.first_name}
                // onChange={handleChange}
                required
                placeholder="Enter Full Name"
              />
            </Styled.Label>

            <Styled.Label>
              Phone Number:
              <Styled.Input
                type="number"
                name="first_name"
                // value={formData.first_name}
                // onChange={handleChange}
                required
                placeholder="Enter User Name"
              />
            </Styled.Label>

            <Styled.Label>
              Email Address:
              <Styled.Input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
                placeholder="Enter Email-ID"
              />
            </Styled.Label>
            <Styled.Label>
              Password:
              <Styled.Input
                type="password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
                required
                placeholder="Enter Password"
              />
            </Styled.Label>

            <Styled.Label>
              City / Town:
              <Styled.Input
                type="text"
                name="first_name"
                // value={formData.first_name}
                // onChange={handleChange}
                required
                placeholder="Enter City"
              />
            </Styled.Label>

            <Styled.CheckboxContainer>
              <Styled.CheckboxInput required />
              <Styled.CheckboxText>
                I agree with the terms & conditions
              </Styled.CheckboxText>
            </Styled.CheckboxContainer>
            <br />
            <Styled.SignupButton type="submit">Sign Up</Styled.SignupButton>
          </Styled.Form>

          <Styled.LineContainer>
            <Styled.OrText>or</Styled.OrText>
          </Styled.LineContainer>

          <div style={{ display: "flex", marginBottom: "4rem" }}>
            <Styled.GoogleButton
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <Image
                src={GoogleLogo}
                alt="Signup Image"
                width={30}
                height={30}
              />
              &nbsp; Sign in with google
            </Styled.GoogleButton>

            <Styled.GoogleButton>
              <Image
                src={AppleLogo}
                alt="Signup Image"
                height={40}
                width={70}
              />
              Sign in with apple
            </Styled.GoogleButton>
          </div>

          <div
            style={{
              display: "flex",
              marginLeft: "7rem",
              paddingBottom: "40px",
            }}
          >
            <Styled.HaveanAccount>Have an account?</Styled.HaveanAccount> &nbsp;
            <Link href="#" onClick={() => signIn()}>
              <Styled.StyledLink>Sign In</Styled.StyledLink>
            </Link>
          </div>
        </Styled.LeftSection>
      </Styled.SignupContainer> */}

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
    </>
  );
};

export default Signup;
