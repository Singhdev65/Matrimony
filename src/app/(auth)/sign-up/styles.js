// import React from "react";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ErrorWrap = styled.p`
  color: red;
  margin: 0;
`;

export const SubmitButton = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

// export const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #f8f9fa;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// export const GetStarted = styled.h2`
//   color: #fff;
//   font-weight: bold;
//   text-shadow: 2px 2px 2px  #c70039;
// `;

// export const HaveanAccount = styled.h3`
//   color: #fff;
// `;

// export const Logo = styled.img`
//   height: 40px;
// `;

// export const HeaderButton = styled.button`
//   margin-left: 10px;
//   padding: 10px 20px;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   cursor: pointer;
//   border-radius: 4px;
//   font-size: 16px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export const GoogleButton = styled.button`
//   padding: 10px 20px 10px 0;
//   border: 1px solid #d3d3d3;
//   background-color: #fff;
//   color: black;
//   cursor: pointer;
//   border-radius: 10px;
//   font-size: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.3s;
//   margin-right: 20px;

//   &:hover {
//     border-color: #bfa06b;
//   }

//   &::before {
//     content: "";
//     background: url("/path/to/google-logo.png") no-repeat center center;
//     background-size: contain;
//     width: 20px;
//     height: 20px;
//     margin-right: 10px;
//   }
// `;

// // ----Signup body----

// export const SignupContainer = styled.div`
//   display: flex;
//   padding: 2rem;
//   border-radius: 1.5rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
//   margin: 2rem;
//   background: #fff;
// `;
// export const LeftSection = styled.div`
//   flex: 1;
//   padding: 20px 20px 50px 20px;
//   z-index: 999;
//   height: 33rem;
// `;
// export const RightSection = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const OuterRightSection = styled.div`
//   flex: 1;
//   padding: 30px;
//   margin-left: 5rem;
// `;
// export const Image = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// export const Label = styled.label`
//   margin-bottom: 10px;
//   font-weight: 500;
//   color: #fdf0e4;
// `;
// export const Input = styled.input`
//   margin-bottom: 10px;
//   margin-top: 10px;
//   display: block;
//   width: 100%;
//   height: 1.5rem;
//   padding: 1rem 1rem;
//   font-family: "main-font-family";
//   font-size: 0.75rem;
//   font-weight: normal;
//   line-height: 1.25;
//   color: #343434;
//   background-color: #fffafa;
//   background-clip: padding-box;
//   border: 1px solid #ececec;
//   border-radius: 0.5rem;
//   box-shadow: none;
//   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
// `;
// export const Button = styled.button`
//   padding: 10px;

//   flex: 1;
//   padding: 1rem;
//   font-family: "main-font-family";
//   font-size: 0.75rem;
//   font-weight: normal;
//   line-height: 1.25;
//   color: #343434;
//   background-color: #ffffff;
//   border: 1px solid #ececec;
//   border-radius: 0.5rem;
//   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//   cursor: pointer;

//   &.active {
//     background-color: #43d477;
//     color: #fff;
//   }

//   &:hover {
//     border-color: #ccc;
//   }
// `;

// export const AccountType = styled.div``;
// export const Card = styled.div`
//   display: flex;
// `;
// export const ButtonContainer = styled.div`
//   margin-bottom: 10px;
//   margin-top: 10px;
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;
// export const CheckboxContainer = styled.label`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;
// export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
//   margin-right: 0.5rem;
// `;
// export const CheckboxText = styled.span`
//   font-weight: medium;
//   color: #fff;
// `;
// export const SignupButton = styled.button`
//   width: 70%;
//   padding: 1rem;
//   font-family: "main-font-family";
//   font-size: 0.75rem;
//   font-weight: normal;
//   line-height: 1.25;
//   color: #6d635e;
//   background-color: #fdf0e4;
//   border: 1px solid #ececec;
//   border-radius: 0.5rem;
//   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//   font-weight: medium;
//   margin-bottom: 4rem;

//   cursor: pointer;
//   &:hover {
//     background-color: #ddcac7;
//   }
// `;
// export const CardHeader = styled.div`
//   font-size: 1.25rem;
//   font-weight: bold;
//   line-height: 1.22;
//   padding-bottom: 3rem;
// `;

// // ---google signup button---

// export const GSignInWrapper = styled.div`
//   display: inline-block;
// `;

// export const GoogleLabel = styled.span`
//   font-family: serif;
//   font-weight: normal;
// `;

// export const CustomBtn = styled.div`
//   display: inline-block;
//   background: white;
//   color: #444;
//   width: 190px;
//   border-radius: 5px;
//   border: thin solid #888;
//   box-shadow: 1px 1px 1px grey;
//   white-space: nowrap;

//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const Icon = styled.span`
//   background: url("/identity/sign-in/g-normal.png") transparent 5px 50%
//     no-repeat;
//   display: inline-block;
//   vertical-align: middle;
//   width: 42px;
//   height: 42px;
// `;

// export const ButtonText = styled.span`
//   display: inline-block;
//   vertical-align: middle;
//   padding-left: 42px;
//   padding-right: 42px;
//   font-size: 14px;
//   font-weight: bold;
//   font-family: "Roboto", sans-serif;
// `;

// export const LineContainer = styled.div`
//   width: 100%;
//   height: 1px;
//   background-color: #d3d3d3;
//   position: relative;
//   margin-bottom: 4rem;
// `;

// export const OrText = styled.span`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: white;
//   padding: 0 10px;
// `;

// export const StyledLink = styled.div`
//   color: #c70039;
//   transition: transform 0.3s ease, background-color 0.3s ease;
//   font-weight: bold;

//   &:hover {
//     font-style: italic;
//   }
// `;

// export const Background = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
//   background-image: url("../../../Assets/Images/signup2.jpg");
//   background-size: cover;
//   background-position: center;
// `;

// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent overlay */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const FormContainer = styled.div`
//   background: rgba(255, 255, 255, 0.9); /* Make the form slightly transparent */
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   width: 100%;
// `;

// export const BackgroundImage = styled(Image)`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
// `;
