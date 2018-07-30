import React from 'react';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledSummary = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 1rem;
  padding: 0 0 1rem;
  border-bottom: 1px solid rgba(200, 230, 240, 0.4);
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 90%;
    align-items: flex-start;
  }

  div.thumbnail {
    width: 200px;
    margin: 0.75rem 1.5rem 0 0;
  }

  div.summary-content {
    flex: 1;

    h3 {
      font-size: 1.9rem;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      font-family: 'Merriweather', serif;
    }

    div.post-meta {
      color: #c5ac78;
      margin: 0 0 1rem;

      span.date {
        color: #3096a7;

        font-size: 1.2rem;
        padding-right: 0.5rem;
        margin: 0 0.5rem 0.75rem 0;

        border-right: 1px solid rgba(250, 250, 250, 0.3);
      }

      span.readtime {
        display: inline-block;
        font-size: 0.95rem;
        font-style: italic;
        line-height: 1;
      }

      span.tags {
        display: block;
        font-size: 0.9rem;
        margin: 0.66rem 0;

        a {
          background-color: rgba(250, 250, 250, 0.07);
          border-radius: 6px;
          display: inline-block;
          font-size: 0.9rem;
          font-style: italic;
          line-height: 1;
          padding: 0.5rem;
          margin-right: 0.3rem;
        }
      }
    }

    p.desc {
      margin: 0 0 1rem;
    }
  }
`;

export const Summary = ({ node, title }) => {
  return (
    <StyledSummary className="post-summary">
      <div className="thumbnail">
        <Link to={`/blog${node.fields.slug}`}>
          <Img fixed={node.frontmatter.featureimg.childImageSharp.fixed} />
        </Link>
      </div>

      <div className="summary-content">
        <h3>
          <Link to={`/blog${node.fields.slug}`}>{title}</Link>
        </h3>

        <div className="post-meta">
          <span className="date">{node.frontmatter.date}</span>
          <span className="readtime">
            time to read: {node.timeToRead} min{node.timeToRead > 1 ? 's' : ''}
          </span>
          <span className="tags">
            in:{' '}
            {node.frontmatter.tags.map(tag => (
              <Link to={`/tags/${kebabCase(tag)}`} key={tag + `tag`}>
                {tag}
              </Link>
            ))}
          </span>
        </div>

        <p className="desc">{node.frontmatter.description} </p>
        <p>
          <Link to={`/blog${node.fields.slug}`}>Read &gt;</Link>{' '}
        </p>
      </div>
    </StyledSummary>
  );
};

export default Summary;
