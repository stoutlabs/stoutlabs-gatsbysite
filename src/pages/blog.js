import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import Seo from '../components/Seo';
import Summary from '../components/Blog/Summary';

const AllPostsList = styled.div`
  padding: 1rem;

  h2 {
    color: #3096a7;
    font-size: 2.2rem;
    margin: 0 0 3rem;
  }

  div.posts-list {
    margin: 1rem;
  }
`;

export class BlogIndex extends Component {
  render() {
    const seoData = {
      frontmatter: {
        title: 'StoutLabs Web Design & Development Blog'
      }
    };

    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <BlogLayout location={this.props.location}>
        <Seo postData={seoData} />

        <AllPostsList className="blog">
          <div className="posts-list">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title
                ? node.frontmatter.title
                : node.fields.slug;

              return (
                <Summary node={node} key={node.fields.slug} title={title} />
              );
            })}
          </div>
        </AllPostsList>
      </BlogLayout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            tags
            date(formatString: "DD MMMM, YYYY")
            title
            description
            featureimg {
              childImageSharp {
                fluid(maxWidth: 600, quality: 81) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
