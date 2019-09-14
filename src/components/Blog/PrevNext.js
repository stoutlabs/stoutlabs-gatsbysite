import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledPrevNext = styled.div`
  margin: 2.5rem 0;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  li {
    margin: 0;
    width: 50%;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
      text-align: left;
    }

    span.label {
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
    }

    a {
      display: flex;
      flex-direction: row;
      padding: 0.3rem;
      color: #ff7485;
      text-align: center;
      font-size: 0.95rem;
      align-items: center;
      justify-content: flex-start;

      @media screen and (min-width: 768px) {
        text-align: left;
      }

      &:visited {
        color: #ff7485;
      }
      &:hover {
        color: #ea5d55;
      }

      span {
        padding: 0 1rem 0 0;
      }
    }
  }

  li.next {
    @media screen and (min-width: 768px) {
      text-align: right;
    }

    a {
      text-align: center;
      justify-content: flex-end;

      @media screen and (min-width: 768px) {
        text-align: right;
      }

      span {
        padding: 0 0 0 1rem;
      }
    }
  }
`;

export const PrevNext = ({ prev, next }) => (
  <StyledPrevNext className="prevnext">
    <ul>
      {prev !== null ? (
        <li>
          <span className="label">Newer</span>
          <Link to={`/blog${prev.fields.slug}`} rel="prev">
            <span>&larr;</span>
            {prev.frontmatter.title}
          </Link>
        </li>
      ) : (
        <li>&nbsp;</li>
      )}

      {next !== null ? (
        <li className="next">
          <span className="label">Older</span>
          <Link to={`/blog${next.fields.slug}`} rel="next">
            {next.frontmatter.title}
            <span>&rarr;</span>
          </Link>
        </li>
      ) : null}
    </ul>
  </StyledPrevNext>
);

export default PrevNext;
