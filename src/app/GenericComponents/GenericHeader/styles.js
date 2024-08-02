import React from "react";
import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #b38335;
`;
export const Logo = styled.div``;
export const Button = styled.button`
  background-color: #faa0a0;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    background-color: #fbceb1;
  }
`;
export const Separator = styled.div`
  width: 1px;
  height: 20px;
  background-color: #fff;
  margin: 0 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const GridviewButton = styled.div`
  background-color: grey;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #9cecbc;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  margin-right: 10px; /* Adjust margin as needed */
  padding: 8px; /* Adjust padding as needed */
  border: 1px solid #ccc; /* Border style */
  border-radius: 4px; /* Rounded corners */
  font-size: 14px; /* Font size */
  outline: none;
`;
