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
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    margin: 0;
    a {
      display: inline-block;
      padding: 0.3rem;
      color: #ff7485;

      &:visited {
        color: #ff7485;
      }
      &:hover {
        color: #ea5d55;
      }
    }
  }
`;

export const PrevNext = ({ prev, next }) => {
  return (
    <StyledPrevNext className="prevnext">
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0
        }}
      >
        {prev !== null ? (
          <li>
            <Link to={'/blog' + prev.fields.slug} rel="prev">
              &lt; {prev.frontmatter.title}
            </Link>
          </li>
        ) : (
          <li>&nbsp;</li>
        )}

        {next !== null ? (
          <li>
            <Link to={'/blog' + next.fields.slug} rel="next">
              {next.frontmatter.title} &gt;
            </Link>
          </li>
        ) : null}
      </ul>
    </StyledPrevNext>
  );
};

export default PrevNext;
