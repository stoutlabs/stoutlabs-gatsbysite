import React from "react";
import { graphql } from "gatsby";

import BlogLayout from "components/Blog/BlogLayout";
import Post from "components/Blog/Post";
import { MdxContent } from "components/Content";
import Seo from "components/Seo";
import "assets/styles/dracula.css"; // prismjs theme

export default function PageTemplate({ pageContext, data: { mdx } }) {
  return (
    <BlogLayout>
      <Seo
        postData={mdx}
        isBlogPage
        postImage={
          mdx.frontmatter.featureimg
            ? mdx.frontmatter.featureimg.childImageSharp.fluid.src
            : null
        }
      />
      <Post
        content={mdx.body}
        contentComponent={MdxContent}
        description={mdx.frontmatter.description}
        tags={mdx.frontmatter.tags}
        date={mdx.frontmatter.date}
        title={mdx.frontmatter.title}
        prev={pageContext.previous}
        next={pageContext.next}
        featureimg={mdx.frontmatter.featureimg || null}
        timetoread={mdx.timeToRead}
        slug={mdx.fields.slug}
        allNode={mdx}
        shareImg={
          mdx.frontmatter.featureimg
            ? mdx.frontmatter.featureimg.childImageSharp.fluid.src
            : null
        }
      />
    </BlogLayout>
  );
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title

        description
        tags
        featureimg {
          childImageSharp {
            fluid(maxWidth: 950, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
