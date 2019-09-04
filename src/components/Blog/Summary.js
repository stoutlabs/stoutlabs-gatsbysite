import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
//import { months } from 'moment';

const StyledSummary = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 0 1rem;
  padding: 0 0 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: calc(50% - 1rem);
  }

  div.thumbnail {
    width: 100%;
    margin: 0;
    padding: 0 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  div.summary-content {
    flex: 1;

    h3 {
      font-size: 1.25rem;
      line-height: 1.25;
      margin: 0.3rem 0 0.25rem;
      padding: 0 0 0.25rem;
      letter-spacing: unset;
      /* font-family: 'Merriweather', serif; */
      font-family: Arial, Helvetica, sans-serif;
      text-align: left;
    }

    div.post-meta {
      color: #c5ac78;
      margin: 0 0 1rem;

      span.date {
        color: #3096a7;

        font-size: 0.9rem;
        padding-right: 0.5rem;
        margin: 0 0.5rem 0.75rem 0;

        border-right: 1px solid rgba(250, 250, 250, 0.3);
      }

      span.readtime {
        display: inline-block;
        font-size: 0.9rem;
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
          padding: 0.25rem;
          margin-right: 0.3rem;
          margin-bottom: 0.4rem;
        }
      }
    }

    p.desc {
      margin: 0 0 1rem;
      font-size: 0.975rem;
    }
  }
`;

export const Summary = ({ node, title }) => {
  //const [year, month, day] = node.frontmatter.rawdate.split('-');

  return (
    <StyledSummary className="post-summary">
      <div className="thumbnail">
        <Link to={`/blog${node.fields.slug}`}>
          <Img fluid={node.frontmatter.featureimg.childImageSharp.fluid} alt={title} />
        </Link>
      </div>

      <div className="summary-content">
        <h3>
          <Link to={`/blog${node.fields.slug}`}>{title}</Link>
        </h3>
        <div className="post-meta">
          <span className="date">{node.frontmatter.date}</span>
          <span className="readtime">
            time to read: {node.timeToRead} min
            {node.timeToRead > 1 ? 's' : ''}
          </span>
        </div>
        <p className="desc">{node.frontmatter.description} </p>
      </div>
    </StyledSummary>
  );
};

export default Summary;
