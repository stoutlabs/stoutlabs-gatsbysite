import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1.5rem 0;

  p {
    margin: 0;
    font-size: 0.95rem;
    text-align: center;
    font-style: italic;
    opacity: 0.9;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <p>&copy; {new Date().getFullYear()} StoutLabs</p>
  </StyledFooter>
);

export default Footer;
