import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledPrevNext = styled.div`
  margin: 2.5rem 0;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    margin: 0;
    width: 50%;

    a {
      display: flex;
      flex-direction: row;
      padding: 0.3rem;
      color: #ff7485;
      text-align: left;
      font-size: 0.95rem;

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

    a.next {
      text-align: right;

      span {
        padding: 0 0 0 1rem;
      }
    }
  }
`;

export const PrevNext = ({ prev, next }) => {
  return (
    <StyledPrevNext className="prevnext">
      <ul>
        {prev !== null ? (
          <li>
            <Link to={'/blog' + prev.fields.slug + '#top'} rel="prev">
              <span>&larr;</span>
              {prev.frontmatter.title}
            </Link>
          </li>
        ) : (
          <li>&nbsp;</li>
        )}

        {next !== null ? (
          <li>
            <Link
              to={'/blog' + next.fields.slug + '#top'}
              rel="next"
              className="next"
            >
              {next.frontmatter.title}
              <span>&rarr;</span>
            </Link>
          </li>
        ) : null}
      </ul>
    </StyledPrevNext>
  );
};

export default PrevNext;
