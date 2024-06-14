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
  flex: 0.25;
  background-color: red;
  ${"" /* width: 30vw; */}
  ${"" /* height: 100vh; */}
`;

export const RightSection = styled.div`
  flex: 0.75;
  ${'' /* background-color: green; */}
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
  border: 1px solid blue;
  height: 100vh;
`;

export const LoginTabs = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Tab = styled.button`
  cursor: pointer;
  padding: 10px;
  &.active {
    background: blue;
    color: white;
  }
`;
export const TabContent = styled.div`
  margin-top: 20px;
`;
