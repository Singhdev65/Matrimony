import React from "react";
import * as Styled from "./styles";

interface Company {
  href: string;
  name: string;
}

interface LinkItem {
  href: string;
  name: string;
}

interface FooterProps {
  company?: Company;
  links?: LinkItem[];
}

const Footer: React.FC<FooterProps> = ({
  company = { href: "https://www.creative-tim.com/", name: "Just Coupled" },
  links = [
    { href: "https://www.creative-tim.com/", name: "Just Coupled" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
}) => {
  const { href, name } = company;

  const renderLinks = () =>
    links.map((link) => (
      <Styled.LinkItem key={link.name}>
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      </Styled.LinkItem>
    ));

  return (
    <Styled.FooterContainer>
      <Styled.CompanyInfo>
        &copy; {new Date().getFullYear()}, made with
        <a href={href} target="_blank" rel="noopener noreferrer">
          &nbsp;{name}&nbsp;
        </a>
        for match making.
      </Styled.CompanyInfo>
      <Styled.LinksList>{renderLinks()}</Styled.LinksList>
    </Styled.FooterContainer>
  );
};

export default Footer;
