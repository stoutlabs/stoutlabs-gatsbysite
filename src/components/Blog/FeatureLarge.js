import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

const StyledFeatureLarge = styled.div`
  div.thumbnail {
    width: 100%;
    padding: 0 0 1.5rem;
  }

  div.details {
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    div.details-date {
      color: #3096a7;
      text-align: center;
      padding: 0.5rem 1rem 0 0;
      margin: 0;
      order: 1;

      .day {
        font-size: 1.6rem;
        padding: 0 0 0.4rem;
      }

      .month {
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: -0.01rem;
        padding: 0 0 0.2rem;
      }
    }

    div.details-info {
      order: 2;

      h3 {
        font-size: 1.6rem;
        order: 2;
        line-height: 1.25;
        margin: 0.3rem 0 0.25rem;
        padding: 0 0 0.25rem;
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
      }

      div.meta {
        color: #c5ac78;
        padding: 0 0 1rem;

        span.date {
          color: #3096a7;

          font-size: 1.1rem;
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
          padding: 0.66rem 0 0;

          a {
            background-color: rgba(250, 250, 250, 0.07);
            border-radius: 6px;
            display: inline-block;
            font-size: 0.9rem;
            font-style: italic;
            line-height: 1;
            padding: 0.25rem 0.5rem;
            margin-right: 0.3rem;
            margin-bottom: 0.4rem;
          }
        }
      }
    }

    div.post-date {
      color: #3096a7;
      text-align: center;
      padding: 0.5rem 1rem 0 0;
      margin: 0;
      order: 1;

      .day {
        font-size: 1.6rem;
        padding: 0 0 0.4rem;
      }

      .month {
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: -0.01rem;
        padding: 0 0 0.2rem;
      }
    }
  }

  div.content {
    width: 100%;
    display: flex;
    flex-direction: row;

    p.desc {
      margin: 0 0 1rem;
      font-size: 1rem;
    }
  }
`;

export default ({ node, title }) => {
  const [year, month, day] = node.frontmatter.rawdate.split("-");

  return (
    <StyledFeatureLarge>
      {node.frontmatter.featureimg && (
        <div className="thumbnail">
          <Link to={`/blog${node.fields.slug}`}>
            <Img fluid={node.frontmatter.featureimg.childImageSharp.fluid} alt={title} />
          </Link>
        </div>
      )}

      <div className="details">
        <div className="details-date">
          <div className="day">{day}</div>
          <div className="month">{month}</div>
          <div>{year}</div>
        </div>

        <div className="details-info">
          <h3>
            <Link to={`/blog${node.fields.slug}`}>{title}</Link>
          </h3>

          <div className="meta">
            <span className="readtime">
              time to read: {node.timeToRead} min
              {node.timeToRead > 1 ? "s" : ""}
            </span>
            <span className="tags">
              {node.frontmatter.tags.map(tag => (
                <Link to={`/tags/${kebabCase(tag)}`} key={tag + `tag`}>
                  {tag}
                </Link>
              ))}
            </span>
          </div>

          <p className="desc">{node.frontmatter.description} </p>
        </div>
      </div>
    </StyledFeatureLarge>
  );
};
