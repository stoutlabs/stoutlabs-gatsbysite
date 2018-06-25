import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 1rem 0 0;

    li {
      margin: 0 1rem 0 0;
      &:last-child {
        margin-right: 0;
      }

      a {
        color: #ffffff;
        text-decoration: none;

        &:hover {
          color: antiquewhite;
        }
      }
    }
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/page-2/">Projects</Link>
        </li>
        <li>
          <Link to="/page-2/">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
