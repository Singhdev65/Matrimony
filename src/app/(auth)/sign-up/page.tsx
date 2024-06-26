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

type FormData = {
  email: string;
  number: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  agree: boolean;
};

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Input
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <Styled.ErrorWrap>This field is required</Styled.ErrorWrap>
        )}

        <Styled.Input
          {...register("number", { required: true })}
          placeholder="Number"
        />
        {errors.number && (
          <Styled.ErrorWrap>This field is required</Styled.ErrorWrap>
        )}

        <Styled.Input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        {errors.firstName && (
          <Styled.ErrorWrap>This field is required</Styled.ErrorWrap>
        )}

        <Styled.Input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <Styled.ErrorWrap>This field is required</Styled.ErrorWrap>
        )}

        <Styled.Input
          {...register("age", { required: true })}
          placeholder="Age"
        />
        {errors.age && (
          <Styled.ErrorWrap>This field is required</Styled.ErrorWrap>
        )}

        <Styled.Select {...register("gender", { required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Styled.Select>
        {errors.gender && (
          <Styled.ErrorWrap>This field is required</Styled.ErrorWrap>
        )}

        <Styled.Label>
          <Styled.Input
            type="checkbox"
            {...register("agree", { required: true })}
          />
          I agree to the terms and conditions
        </Styled.Label>
        {errors.agree && (
          <Styled.ErrorWrap>You must agree before submitting.</Styled.ErrorWrap>
        )}

        <input type="submit" />
      </Styled.Form>
    </>
  );
};

export default Signup;
