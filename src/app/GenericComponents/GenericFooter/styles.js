import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #fff;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #000;
  font-size: 0.875rem;
  padding: 0 1.5rem;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 1.5rem;
  margin-bottom: 0;
  padding: 0;
  color: black;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

export const LinkItem = styled.li`
  padding: 0 1rem;
  line-height: 1;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: regular;
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