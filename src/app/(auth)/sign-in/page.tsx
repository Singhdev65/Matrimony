"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import * as Styled from "./styles";
import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("Phone");

  return (
    <Styled.Card>
      <Styled.LeftSection>Image</Styled.LeftSection>
      <Styled.RightSection>
        <Styled.LoginTabs>
          <Styled.Tab
            className={activeTab === "Phone" ? "active" : ""}
            onClick={() => setActiveTab("Phone")}
          >
            Login with Phone
          </Styled.Tab>
          <Styled.Tab
            className={activeTab === "Email" ? "active" : ""}
            onClick={() => setActiveTab("Email")}
          >
            Login with Email
          </Styled.Tab>
        </Styled.LoginTabs>
        <Styled.TabContent>
          {activeTab === "Phone" && <div>Login with Phone Number</div>}
          {activeTab === "Email" && <div>Login with Email</div>}
        </Styled.TabContent>
      </Styled.RightSection>
    </Styled.Card>
  );
};

export default Login;
