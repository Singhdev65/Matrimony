import styled from "styled-components";
import Link from "next/link";

export const CustomTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomTab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#d3d3d3" : "#F0F0F0")};
  border-left: ${(props) =>
    props.active ? "4px solid #42d476" : "4px solid transparent"};
  &:hover {
    background-color: #d3d3d3;
  }
`;

export const CustomTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const DrawerContainer = styled.div`
  display: flex;
`;

export const Drawer = styled.div`
  background-color: #f8f8f8;
  ${"" /* border-right: '1px solid #ccc */}
`;

export const ProfileContent = styled.div`
  flex-grow: 1;
  padding: 24px;
  overflow: auto;
`;

export const ProfileFormContainer = styled.div`
  width: 100%;
`;

export const ProfileDetailContainer = styled.div`
  padding: 2rem 2rem 2rem 1rem;
  display: flex;
  alignitems: "center";
`;

// export const EmailTypography = styled(MDTypography)(({ theme }) => ({
//   fontSize: "0.875rem",
//   fontWeight: 400,
// }));

export const EmailTypography = styled.h6`
  fontsize: "0.875rem";
  fontweight: 400;
`;

// export const StyledAvatar = styled(Avatar)(({ theme }) => ({
//   width: 56,
//   height: 56,
//   marginRight: "16px",
// }));

export const GeneralDetailContainer = styled.div`
  padding: 1rem;
`;

// // ----Personal Details----

// export const ImagePreview = styled.img`
//   max-width: 100px;
//   margin-left: 50px;
// `;

// export const Section = styled.div``;

// export const DrawerContainer = styled.div`
//   display: flex;
// `

// export const Drawer = styled.div`
//   background-color: #f8f8f8;
//   ${'' /* border-right: '1px solid #ccc */}
// `

// export const ProfileContent = styled.div`
//   flex-grow: 1;
//   padding: 24px;
//   overflow: auto;
// `

// export const ProfileFormContainer = styled.div``

// export const ProfileDetailContainer = styled.div`
//   padding: 2rem 2rem 2rem 1rem;
//   display: flex;
//   alignitems: 'center';
// `

// export const EmailTypography = styled(MDTypography)(({ theme }) => ({
//   fontSize: '0.875rem',
//   fontWeight: 400,
// }))

// export const StyledAvatar = styled(Avatar)(({ theme }) => ({
//   width: 56,
//   height: 56,
//   marginRight: '16px',
// }))

// export const GeneralDetailContainer = styled.div`
//   padding: 1rem;
// `

// // ----Personal Details----

// export const ImagePreview = styled.img`
//   max-width: 100px;
//   margin-left: 50px;
// `

export const CardWrapper = styled.div`
  height: 100vh;
`;

export const Section = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

export const ImageItem = styled.div`
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

export const Image = styled.img`
  ${
    "" /* width: 100%;
  height: auto; */
  }
  border: 1px solid #ccc;
  height: 200px;
  width: 200px;
`;

export const Label = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #333;
`;

export const IMGContainer = styled.div`
  display: flex;
  ${"" /* justify-content: space-between; */}
  ${"" /* border: 1px solid green; */}
  ${
    "" /* height: 200px;
  width: 200px; */
  }
  margin-right: 30px;
`;

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SingleCategory = styled.div`
  border: 1px solid #ccc;
  width: auto;
  padding: 20px;
  cursor: Pointer;
`;

export const SeeAllLink = styled.h6`
  ${
    "" /* position: absolute;
  top: 20px;
  right: 20px; */
  }
  font-size: 14px;
  color: blue;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const EditIconContainer = styled.div`
  background: white;
  border-radius: 50%;
  padding: 2px;
`;

// ---new--
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const InfoLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
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
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const Button = styled.button`
  padding: 10px;

  flex: 1;
  padding: 1rem;
  font-family: "main-font-family";
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.25;
  color: #343434;
  background-color: #ffffff;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;

  &.active {
    background-color: #43d477;
    color: #fff;
  }

  &:hover {
    border-color: #ccc;
  }
`;

export const Select = styled.select`
  margin-bottom: 10px;
  margin-top: 10px;
  display: block;
  width: 100%;
  padding: 5px 10px; /* Adjust padding as needed */
  font-family: "main-font-family";
  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.25;
  color: #343434;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  box-shadow: none;
  appearance: none; /* Removes default dropdown arrow */
  cursor: pointer;

  &:hover {
    border-color: #ccc;
  }

  &:focus {
    border-color: #007bff; /* Example focus color */
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Example focus shadow */
  }

  &::-ms-expand {
    display: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: #faa0a0;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 150px;
  text-align: center;
  align-items: center;

  &:hover {
    background-color: #fbceb1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(98, 0, 234, 0.4);
  }

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

export const Option = styled.option`
  font-family: "main-font-family";
  font-size: 0.75rem;
  color: #343434;
`;

export const Fileinput = styled.input`
  cursor: pointer;
`;
