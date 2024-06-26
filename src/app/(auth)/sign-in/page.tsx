"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import * as Styled from "./styles";
import React, { useState } from "react";
import Image from "next/image";
import SignupImage from "../../../Assets/Images/signup5.jpg";

const Login = () => {
  const [activeTab, setActiveTab] = useState<string>("phone");

  const emailInput = [
    {
      id: 0,
      placeholder: "Enter email",
      type: "email",
    },
    {
      id: 1,
      placeholder: "Enter password",
      type: "password",
    },
  ];

  return (
    <Styled.Background>
      <Image
        src={SignupImage}
        alt="Signup Image"
        layout="fill"
        objectFit="cover"
        style={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Styled.Card>
        <Styled.LeftSection>Welcome</Styled.LeftSection>
        <Styled.RightSection>
          <h1>Login?</h1>
          <h5>New User? Register for free</h5>
          <Styled.LoginOptions>
            <Styled.RadioButton>
              <input
                type="radio"
                id="phone"
                name="loginMethod"
                value="Phone"
                checked={activeTab === "Phone"}
                onChange={() => setActiveTab("Phone")}
              />
              <label htmlFor="phone">Login with Phone</label>
            </Styled.RadioButton>
            <Styled.RadioButton>
              <input
                type="radio"
                id="email"
                name="loginMethod"
                value="Email"
                checked={activeTab === "Email"}
                onChange={() => setActiveTab("Email")}
              />
              <label htmlFor="email">Login with Email</label>
            </Styled.RadioButton>
          </Styled.LoginOptions>
          <Styled.TabContent>
            {activeTab === "Phone" && (
              <div>
                <Styled.Input
                  type="text"
                  id="phoneInput"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>
            )}
            {activeTab === "Email" && (
              <Styled.EmailContainer>
                {emailInput?.map((item, index) => {
                  return (
                    <Styled.Input
                      type="text"
                      key={index}
                      value={item?.placeholder}
                    />
                  );
                })}
                <Styled.ForgotPassword>Forgot password?</Styled.ForgotPassword>
              </Styled.EmailContainer>
            )}
          </Styled.TabContent>
          <br />
          <Styled.LoginButtonWrapper>
            <Styled.SignupButton>
              {activeTab === "Phone" ? "Generate OTP" : "Login Now"}
            </Styled.SignupButton>
          </Styled.LoginButtonWrapper>
        </Styled.RightSection>
      </Styled.Card>
    </Styled.Background>
  );
};

export default Login;
