import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import styled from "styled-components";

import BlogLayout from "components/Blog/BlogLayout";
import Seo from "components/Seo";

const StyledTagsSection = styled.section`
  div.content {
    padding: 0;
  }

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.7rem;
    font-weight: normal;
    line-height: 1.4;
    background: rgba(140, 140, 140, 0.1);
    padding: 1rem;
    margin-top: -2rem;
    text-shadow: 1px 2px 2px rgba(30, 30, 30, 0.8);
  }

  ul.taglist {
    margin: 2rem 0;

    li {
      margin: 0 0 0.75rem;
      padding: 0 0 0.75rem 1rem;
      border-bottom: 1px solid rgba(250, 250, 250, 0.1);

      &:last-child {
        border-bottom: 0;
      }
    }

    h3 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.2rem;
      line-height: 1.2;
      margin: 0 0 0.33rem;
      padding: 1rem 0 0;
      text-align: left;

      color: #ea5d55;

      /* &:hover {
        color: #f37b75;
      } */
    }

    span.tags {
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 0.9rem;
      padding: 0;

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

    span.date {
      display: inline-block;
      color: #3096a7;
      font-size: 1rem;
      padding-right: 0.5rem;
      margin: 0 0.5rem 0.75rem 0;
      border-right: 1px solid rgba(250, 250, 250, 0.3);
    }
  }

  p.bottom-nav {
    margin: 0 1rem;
    background: rgba(120, 120, 120, 0.15);
    padding: 1rem;
    text-align: center;
  }
`;

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;
  const { tag } = pageContext;
  const title = `Posts Tagged: ${tag} | StoutLabs Web Design & Development Blog`;
  const { totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with “${tag}”:`;

  const seoData = {
    frontmatter: {
      title,
      description: `List of all posts tagged with: ${tag}`,
    },
  };

  return (
    <BlogLayout>
      <StyledTagsSection>
        <Seo postData={seoData} />

        <div className="content">
          <h2>{tagHeader}</h2>

          <ul className="taglist">
            {posts.map(post => (
              <li key={post.node.fields.slug}>
                <h3>
                  <Link to={`/blog${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link>
                </h3>
                <span className="date">{post.node.frontmatter.date}</span>
                <span className="tags">
                  {post.node.frontmatter.tags.map(theTag => (
                    <Link to={`/tags/${kebabCase(theTag)}`} key={`${theTag}_${tag}`}>
                      {theTag}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>

          <p className="bottom-nav">
            <Link to="/tags">Browse all tags</Link> | <Link to="/blog">Back to Blog Home</Link>
          </p>
        </div>
      </StyledTagsSection>
    </BlogLayout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
          }
        }
      }
    }
  }
`;
