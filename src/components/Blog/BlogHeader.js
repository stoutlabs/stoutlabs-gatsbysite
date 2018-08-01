import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import BlogNav from './BlogNav';
import Logo from '../../assets/images/blog_logo.svg';

const StyledHeader = styled.div`
  background: linear-gradient(#971640, #eb5e55);
  box-sizing: border-box;
  color: #dadada;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 150px;
  text-align: center;

  div.inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }

  div.logo {
    overflow: hidden;
    img {
      width: 250px;

      @media screen and (min-width: 960px) {
        width: 200px;
      }
    }

    a {
      display: block;
      img {
        max-width: 100%;
      }
    }
  }

  div.header-content {
  }
`;

const Header = () => (
  <StyledHeader className="header">
    <div className="inner">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="StoutLabs logo" className="logosvg" />
        </Link>
      </div>

      <div className="header-content">
        <BlogNav />
      </div>
    </div>
  </StyledHeader>
);

export default Header;
