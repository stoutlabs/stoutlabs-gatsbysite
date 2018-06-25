import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import BioPic from './BioPic';
// import Nav from './Nav';
import SocialIcons from './SocialIcons';

const StyledHeader = styled.div`
  background: linear-gradient(0deg, #105662, #3096a7);
  box-sizing: border-box;
  color: #dadada;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  text-align: center;

  @media screen and (min-width: 960px) {
    align-items: flex-end;
    justify-content: space-between;
    padding: 8rem 4rem;
    position: fixed;
    width: 35%;
    height: 100vh;
    top: 0;
    left: 0;
    text-align: right;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 3.2rem;
    margin: 0 0 0.2rem;
    text-shadow: 1.5px 2.598px 1px rgba(0, 10, 15, 0.17);
    letter-spacing: -1px;

    a {
      color: white;
      text-decoration: none;
    }

    @media screen and (min-width: 960px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    color: #fff;
    font-size: 1.2rem;
    margin: 0 0 2rem;
    opacity: 0.75;
    padding: 0;
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
  <StyledHeader className="header">
    <div className="inner">
      <h1>
        <Link to="/">StoutLabs</Link>
      </h1>

      <h2>Web Development & Design</h2>

      <div className="header-photo">
        <BioPic />
      </div>

      <div className="header-intro-text">
        <p>
          Hi, I’m Daniel Stout. <em>Freelance web developer</em>, dog parent,
          hobbyist chef, disc golfer, and music nerd living in East TN.
        </p>
      </div>

      {/* <Nav /> */}

      <SocialIcons />
    </div>
  </StyledHeader>
);

export default Header;
