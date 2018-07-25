import React from 'react';

import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 1.5rem;
    padding: 1rem 0 0;

    @media screen and (min-width: 960px) {
      justify-content: flex-end;
    }

    li {
      margin: 0 1rem 0 0;
      padding-right: 1rem;
      border-right: 1px solid rgba(254, 241, 241, 0.5);

      &:last-child {
        margin-right: 0;
        border-right: none;
        padding-right: 0;
      }

      a {
        color: #fef1f1;
        opacity: 0.85;
        text-decoration: none;

        font-size: 1.3rem;

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
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#tools">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
