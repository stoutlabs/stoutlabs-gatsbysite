import React, { Component } from 'react';
import { graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import PostsList from '../components/Blog/PostsList';
import Seo from '../components/Seo';

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
        <PostsList posts={posts} />
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
            rawdate: date(formatString: "YYYY-MMM-DD")
            title
            description
            featureimg {
              childImageSharp {
                fluid(maxWidth: 800, quality: 81) {
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
