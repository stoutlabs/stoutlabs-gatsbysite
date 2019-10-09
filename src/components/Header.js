import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Nav } from "./Nav";
import Logo from "../assets/images/logo_svg_2018.svg";
import { SocialIcons } from "./SocialIcons";

const StyledHeader = styled.div`
  background: linear-gradient(#971640, #eb5e55);
  box-sizing: border-box;
  color: #dadada;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  @media screen and (min-width: 960px) {
    align-items: flex-end;
    justify-content: space-between;
    position: fixed;
    width: 35%;
    height: 100vh;
    top: 0;
    left: 0;
    text-align: right;
  }

  div.inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 2rem;

    @media screen and (min-width: 960px) {
      height: 100vh;
      align-items: flex-end;
    }
  }

  div.header-photo {
    margin: 0;
  }
`;

const StyledLogo = styled.div`
  overflow: hidden;
  margin: 2rem 0 0;

  img {
    max-width: 100%;

    @media screen and (max-width: 816px) and (orientation: landscape) {
      max-height: 120px;
    }

    @media screen and (min-width: 960px) {
      max-width: 370px;
      max-height: unset;
    }
  }

  h1,
  h2 {
    text-indent: -2000px;
    display: none;
    position: absolute;
  }

  a {
    display: block;
    img {
      max-width: 100%;
    }
  }
`;

const HeaderContent = styled.div`
  padding: 0 0 2rem;

  div.intro-content {
    margin: 1.2rem 0;

    @media screen and (max-width: 800px) and (orientation: landscape) {
      margin: 0.5rem 0;
    }

    p {
      font-size: 1.15rem;
      line-height: 1.5;
      margin: 0 0 1rem;
      color: #febcb8;
      text-align: center;

      @media screen and (max-width: 800px) and (orientation: landscape) {
        font-size: 1rem;
      }

      @media screen and (min-width: 1200px) {
        text-align: right;
        font-size: 1.35rem;
      }

      em {
        color: #ffffff;
      }

      b {
        color: #ffffff;
        font-weight: 700;
      }
    }
  }
`;

const Header = () => (
  <StyledHeader className="header">
    <div className="inner">
      <StyledLogo>
        <h1>Web Development Services</h1>
        <Link to="/">
          <img src={Logo} alt="StoutLabs logo" className="logosvg" />
        </Link>
      </StyledLogo>

      <HeaderContent>
        <div className="intro-content">
          <p>
            Hi, I’m Daniel Stout. <em>Freelance web developer</em>, dog parent,
            hobbyist chef, disc golfer, and music nerd living in East TN.
          </p>
        </div>

        <Nav />

        <SocialIcons />
      </HeaderContent>
    </div>
  </StyledHeader>
);

export default Header;
