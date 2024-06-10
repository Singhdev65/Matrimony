import React from "react";
import * as Styled from "./styles";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SignupImage from "../../../Assets/Images/signup2.jpg";
import GoogleLogo from "../../../Assets/Images/googleLogo.png";
import AppleLogo from "../../../Assets/Images/appleLogo.png";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <Styled.SignupContainer>
        <Styled.LeftSection>
          <h2>Get Started</h2>
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
              &nbsp; SignIn with google
            </Styled.GoogleButton>

            <Styled.GoogleButton>
              <Image
                src={AppleLogo}
                alt="Signup Image"
                height={40}
                width={70}
              />
              SignIn with apple
            </Styled.GoogleButton>
          </div>

          <div style={{ display: "flex", marginLeft: "7rem" }}>
            <h3>Have an account?</h3> &nbsp;
            <Link href="#" onClick={() => signIn()}>
              <Styled.StyledLink>Sign In</Styled.StyledLink>
            </Link>
          </div>
        </Styled.LeftSection>

        <Styled.RightSection>
          <Image
            src={SignupImage}
            alt="Signup Image"
            width={700}
            height={700}
          />
        </Styled.RightSection>
      </Styled.SignupContainer>
    </>
  );
};

export default Signup;
