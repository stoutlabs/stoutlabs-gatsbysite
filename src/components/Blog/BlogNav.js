import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
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

        font-size: 1.2rem;

        &:hover {
          color: antiquewhite;
        }
      }

      &.active a {
        text-decoration: underline;
      }
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

export const BlogNav = ({ sticky, className }) => (
  <StyledNav className={sticky ? `sticky ${className}` : `${className}`}>
    <ul>
      <li>
        <Link to="/blog/" activeClassName="active">
          All Posts
        </Link>
      </li>
      <li>
        <Link to="/tags/" activeClassName="active">
          All Tags
        </Link>
      </li>
    </ul>
  </StyledNav>
);

export default BlogNav;
