import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 400px;
  z-index: 999;
  background-color: #fff;
  position: absolute;
  top: 110px;
  left: 60rem;

  @media (max-width: 768px) {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
    top: 20px;
  }
`;

export const Outerdiv = styled.div`
  background-color: green;
  min-height: 135vh;
  position: relative;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 5px;
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
  color: gray;
  margin-bottom: 2px;
`;

export const Error = styled.p`
  color: red;
  margin: 0;
  font-size: 0.8rem;
  position: absolute;
  bottom: -20px;
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

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("path-to-your-image.jpg");
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  color: #333;
`;

export const CheckboxLabel = styled.span`
  margin-left: 8px;
`;
