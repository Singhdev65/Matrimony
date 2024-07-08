import styled from "styled-components";

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

export const ProfileFormContainer = styled.div``;

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
 height: 100vh
`;
