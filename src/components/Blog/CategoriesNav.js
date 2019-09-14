import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledCategoryLinks = styled.div`
  padding: 0.5rem;
  background-color: rgba(120, 120, 120, 0.1);
  margin: 0 0 2rem;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      display: inline-block;
      margin: 0;
      border-right: 1px solid rgba(250, 250, 250, 0.1);
      text-transform: lowercase;

      &:last-child {
        border-right: none;
      }

      a {
        padding: 0.33rem;
        margin: 0 0.33rem;
        display: block;
        font-size: 0.95rem;
      }
    }
  }
`;

const CategoriesNav = () => (
  <StyledCategoryLinks>
    <ul className="category-links">
      <li>
        <Link to="/tags/javascript/" activeClassName="active">
          JavaScript
        </Link>
      </li>
      <li>
        <Link to="/tags/gatsbyjs/" activeClassName="active">
          Gatsby.js
        </Link>
      </li>
      <li>
        <Link to="/tags/quick-lesson/" activeClassName="active">
          Quick Lessons
        </Link>
      </li>
    </ul>
  </StyledCategoryLinks>
);

export default CategoriesNav;
