import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import Post from '../components/Blog/Post';
import { HTMLContent } from '../components/Content';
import Seo from '../components/Seo';
import '../assets/styles/prism-twilight.css';

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  //console.log('context: ', pageContext);
  return (
    <BlogLayout>
      <Seo
        postData={post}
        isBlogPage={true}
        postImage={post.frontmatter.featureimg.childImageSharp.fluid.src}
      />
      <Post
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        prev={pageContext.previous}
        next={pageContext.next}
        featureimg={post.frontmatter.featureimg}
      />
    </BlogLayout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featureimg {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
