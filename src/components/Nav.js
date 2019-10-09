import React from "react";
import Scrollspy from "react-scrollspy";
import styled from "styled-components";
import { Link } from "gatsby";

import Scroll from "./Scroll";

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 1.5rem;
    padding: 1rem 0 0;
    flex-wrap: wrap;

    @media screen and (min-width: 1200px) {
      justify-content: flex-end;
    }
  }

  &.mininav {
    background: linear-gradient(90deg, #ea5d55, #e65a54);
    visibility: hidden;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateY(-100px);
    height: 50px;
    width: 100vw;
    opacity: 0;
    z-index: 99;
    transition: visibility 1ms 300ms linear, opacity 200ms 20ms linear,
      transform 200ms 2ms linear;

    &.sticky {
      @media screen and (max-width: 767px) {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        transition: visibility 1ms 300ms linear, opacity 200ms 300ms linear,
          transform 200ms 300ms linear;
      }
    }

    a {
      font-size: 1.1rem;
    }
  }
`;

const StyledNavItem = styled.li`
  margin: 0 0.5rem 0.66rem 0;
  padding-right: 0.5rem;
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

    font-size: 1.2rem;

    &:hover {
      color: rgba(250, 250, 250, 0.9);
    }
  }

  &.active a {
    text-decoration: underline;
  }
`;

const NavLink = ({
  className,
  children,
  scrolltoID,
  sticky,
  scrollOffset = -50,
}) => (
  <StyledNavItem className={className}>
    <Scroll type="id" element={scrolltoID} offset={sticky ? scrollOffset : 0}>
      <a href={`#${scrolltoID}`}>{children}</a>
    </Scroll>
  </StyledNavItem>
);

export const Nav = ({ sticky, className = "" }) => (
  <StyledNav className={sticky ? `sticky ${className}` : `${className}`}>
    <Scrollspy
      items={["intro", "projects", "tools", "contact"]}
      currentClassName="active"
      offset={sticky ? -50 : 0}
      className={sticky ? `sticky ${className}` : `${className}`}
    >
      <NavLink sticky={sticky} scrollOffset={-10} scrolltoID="intro">
        Intro
      </NavLink>

      <NavLink sticky={sticky} scrolltoID="projects">
        Work
      </NavLink>

      <NavLink sticky={sticky} scrolltoID="tools">
        Skills
      </NavLink>

      <NavLink sticky={sticky} scrolltoID="contact">
        Contact
      </NavLink>

      <StyledNavItem>
        <Link to="/blog">Blog</Link>
      </StyledNavItem>
    </Scrollspy>
  </StyledNav>
);

export default Nav;
