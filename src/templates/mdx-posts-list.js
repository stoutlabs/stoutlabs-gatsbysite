import React, { Component } from "react";
import { graphql } from "gatsby";

import BlogLayout from "../components/Blog/BlogLayout";
import PostsList from "../components/Blog/PostsList";
import PaginatorLinks from "../components/Blog/PaginatorLinks";
import Seo from "../components/Seo";

export class BlogIndex extends Component {
  render() {
    const seoData = {
      frontmatter: {
        title: "StoutLabs Web Design & Development Blog"
      }
    };

    const posts = this.props.data.allMdx.edges;

    return (
      <BlogLayout location={this.props.location}>
        <Seo postData={seoData} />
        <PostsList posts={posts} currentPage={this.props.pageContext.currentPage} />
        <PaginatorLinks
          currentPage={this.props.pageContext.currentPage}
          totalPages={this.props.pageContext.numPages}
        />
      </BlogLayout>
    );
  }
}

export default BlogIndex;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
