import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

const StyledFeatureSmall = styled.div`
  div.thumbnail {
    width: 100%;
  }

  div.summary-content {
    width: 100%;

    h3 {
      font-size: 1.6rem;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.25;
      margin: 0.3rem 0 0.25rem;
      padding: 0;
      text-align: left;
    }

    div.post-meta {
      color: #c5ac78;
      margin: 0 0 1rem;

      span.date {
        color: #3096a7;

        font-size: 1.15rem;
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
          margin-bottom: 0.4rem;
        }
      }
    }

    p.desc {
      margin: 0 0 1rem;
      font-size: 1rem;
    }
  }
`;

const FeatureSmall = ({ node, title }) => (
  <StyledFeatureSmall>
    {node.frontmatter.featureimg && (
      <div className="thumbnail">
        <Link to={`/blog${node.fields.slug}`}>
          <Img fluid={node.frontmatter.featureimg.childImageSharp.fluid} />
        </Link>
      </div>
    )}

    <div className="summary-content">
      <h3>
        <Link to={`/blog${node.fields.slug}`}>{title}</Link>
      </h3>

      <div className="post-meta">
        <span className="date">{node.frontmatter.date}</span>
        <span className="readtime">
          time to read: {node.timeToRead} min
          {node.timeToRead > 1 ? "s" : ""}
        </span>
        <span className="tags">
          in:{" "}
          {node.frontmatter.tags.map(tag => (
            <Link to={`/tags/${kebabCase(tag)}`} key={`${tag}tag`}>
              {tag}
            </Link>
          ))}
        </span>
      </div>

      <p className="desc">{node.frontmatter.description} </p>
      <p>
        <Link to={`/blog${node.fields.slug}`}>Read &gt;</Link>{" "}
      </p>
    </div>
  </StyledFeatureSmall>
);

export default FeatureSmall;
