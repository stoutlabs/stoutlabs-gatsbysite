import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import BlogLayout from '../components/Blog/BlogLayout';
import Seo from '../components/Seo';

const StyledTagsSection = styled.section`
  h3 {
    font-family: Merriweather, serif;
    font-size: 1.8rem;
  }

  ul.taglist {
    margin: 0 0 2rem;

    h2 {
      font-family: Merriweather, serif;
      font-size: 2rem;
    }
  }
`;

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={'/blog' + post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = `Posts Tagged: ${tag} | StoutLabs Web Design & Development Blog`;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    const seoData = {
      frontmatter: {
        title: title,
        description: `List of all posts tagged with: ${tag}`
      }
    };

    return (
      <BlogLayout>
        <StyledTagsSection>
          <Seo postData={seoData} />

          <div className="content">
            <h3>{tagHeader}</h3>
            <ul className="taglist">{postLinks}</ul>
            <p>
              <Link to="/tags">Browse all tags</Link> |{' '}
              <Link to="/blog">Back to Blog Home</Link>
            </p>
          </div>
        </StyledTagsSection>
      </BlogLayout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
            title
          }
        }
      }
    }
  }
`;
