"use client";

import styled from "styled-components";

const HeaderContainer = styled.header`
  font-family: sans-serif;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-size: cover;
  position: relative;
`;

const InfoSection = styled.div`
  color: white;
  font-size: 20px;
  padding: 20px 70px;
  cursor: pointer;
`;

const InfoItem = styled.span`
  margin: 0 10px;
`;

const Navigation = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 2em;
  font-family: normal;
  letter-spacing: 2px;

  i {
    color: #e84393;
  }
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  transition: 0.4s;

  &:last-child {
    background: #e84393;
    border-radius: 8px;
  }

  &:hover {
    background: #e84393;
    border-radius: 8px;
  }
`;

const HeroText = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  max-width: 600px;
  color: white;

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 4em;

    span {
      color: #e84393;
    }
  }

  p {
    margin: 15px 0;
    line-height: 2em;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    border: 1px solid white;
    letter-spacing: 2px;
    border-radius: 8px;
    transition: 0.4s;

    &:hover {
      background: #e84393;
    }
  }
`;

const Compoenent = () => {
  return (
    <>
      <HeaderContainer>
        <InfoSection>
          <InfoItem>+91 9876543210</InfoItem>
          <InfoItem>info@mailinator.com</InfoItem>
        </InfoSection>
        <Navigation>
          <Logo>Lorem ipsum dolor sit amet</Logo>
          <Menu>
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">About us</MenuItem>
            <MenuItem href="#">Services</MenuItem>
            <MenuItem href="#">Stats</MenuItem>
            <MenuItem href="#">Testimonials</MenuItem>
            <MenuItem href="/sign-up">Signup</MenuItem>
          </Menu>
        </Navigation>
        <HeroText>
          <h1>Matrimonial.</h1>
          <h2>
            Best Matching <span>Couples</span>
          </h2>
          <p>
            consectetur adipiscing elit. In non placerat mauris. Sed luctus,
            sapien in euismod auctor, ligula augue mollis nunc, vitae accumsan
            urna velit vehicula magna
          </p>
          <br />
          <a href="#">Read more</a>
        </HeroText>
      </HeaderContainer>
    </>
  );
};

export default Compoenent;
