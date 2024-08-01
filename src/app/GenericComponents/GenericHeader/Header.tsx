import React from "react";
import * as Styled from "./styles";
import AppLogo from "../../../Assets/Images/logo.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ButtonItem {
  label: string;
  // onClick?: () => void;
}

interface GenericHeaderProps {
  buttons: ButtonItem[];
  showSearch: boolean;
}

const GenericHeader: React.FC<GenericHeaderProps> = ({
  buttons,
  showSearch,
}) => {
  const router = useRouter();

  const handlebttnClick = (label: string) => {
    if (label === "Sign in") {
      router.push("/sign-in");
    } else {
      console.log(`${label} button clicked`);
    }
  };

  return (
    <>
      <Styled.HeaderContainer>
        {showSearch && <Styled.SearchInput placeholder="Search..." />}
        <Styled.Logo>
          <Image src={AppLogo} alt="AppLogo" width={50} height={50} />
        </Styled.Logo>
        <Styled.ButtonContainer>
          {buttons?.map((item: any, index: any) => {
            return (
              <Styled.Button
                key={index}
                onClick={() => handlebttnClick(item.label)}
              >
                {item.label}
              </Styled.Button>
            );
          })}
        </Styled.ButtonContainer>
      </Styled.HeaderContainer>
    </>
  );
};
export default GenericHeader;
