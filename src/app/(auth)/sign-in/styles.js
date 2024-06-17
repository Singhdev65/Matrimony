import React from "react";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;

  ${
    "" /* justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  }
`;

export const LeftSection = styled.div`
  flex: 0.35;
  background-color: red;
  ${"" /* width: 30vw; */}
  ${"" /* height: 100vh; */}
`;

export const RightSection = styled.div`
  flex: 0.7;
  padding: 30px;
  ${"" /* background-color: green; */}
  ${"" /* width: 70vw; */}
  ${"" /* height: 100vh; */}
`;

export const Card = styled.div`
  display: flex;
  width: 80vw;
  margin: 20px auto;
  $padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: white;
  height: 100%;
  border-radius: 20px;
  height: 100vh;
  z-index: 1;
`;

export const LoginOptions = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const RadioButton = styled.button`
  cursor: pointer;
  padding: 10px;
  border: none;
  background-color: #fff;
  input[type="radio"] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  label {
    cursor: pointer;
  }

  &.active {
    background: blue;
    color: white;
  }
`;
export const TabContent = styled.div`
  margin-top: 20px;
`;
export const Background = styled.div`
  position: relative;
  overflow-y: hidden;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  margin-top: 10px;
  display: block;
  width: 100%;
  height: 1.5rem;
  padding: 1rem 1rem;
  font-family: "main-font-family";
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.25;
  color: #343434;
  background-color: #fffafa;
  background-clip: padding-box;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const SignupButton = styled.button`
  width: 30%;
  padding: 1rem;
  font-family: "main-font-family";
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.25;
  color: #6d635e;
  background-color: #fdf0e4;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: medium;
  margin-bottom: 4rem;

  cursor: pointer;
  &:hover {
    background-color: #ddcac7;
  }
`;

export const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`;

export const ForgotPassword = styled.h6`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #007bff;
  cursor: pointer;
`;
