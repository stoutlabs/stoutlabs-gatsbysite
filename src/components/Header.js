import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import theme from '../utils/theme';

//import BioPic from './BioPic';
import Nav from './Nav';
import Logo from '../assets/images/logo_svg_2018.svg';
import SocialIcons from './SocialIcons';

const StyledHeader = styled.div`
  background: linear-gradient(${props => props.theme.colorAccent1}, #eb5e55);
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
    justify-content: space-around;
    padding: 1rem 2rem 2rem;

    @media screen and (min-width: 960px) {
      height: 100vh;
      align-items: flex-end;
    }
  }

  div.logo {
    overflow: hidden;
    img {
      width: 100%;

      @media screen and (min-width: 960px) {
        width: 100%;
        max-width: 370px;
      }
    }

    h1,
    h2 {
      text-indent: -2000px;
      display: none;
      position: absolute;
    }
  }

  div.header-content {
  }

  div.header-photo {
    margin: 0;
  }

  div.header-intro-text {
    margin: 2rem 0;

    p {
      font-size: 1.4rem;
      line-height: 1.5;
      margin: 0 0 1.6rem;
      color: #febcb8;

      @media screen and (min-width: 960px) {
        font-size: 1.3rem;
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

const Header = ({ siteTitle }) => (
  <StyledHeader className="header" theme={theme}>
    <div className="inner">
      <div className="logo">
        <h1>
          <Link to="/">StoutLabs</Link>
        </h1>

        <h2>Web Development Services</h2>
        <Link to="/">
          <img src={Logo} alt="StoutLabs logo" className="logosvg" />
        </Link>
      </div>

      {/* <div className="header-photo">
        <BioPic />
      </div> */}
      <div className="header-content">
        <div className="header-intro-text">
          <p>
            Hi, I’m Daniel Stout. <em>Freelance web developer</em>, dog parent,
            hobbyist chef, disc golfer, and music nerd living in East TN.
          </p>
        </div>

        <Nav />

        <SocialIcons />
      </div>
    </div>
  </StyledHeader>
);

export default Header;
