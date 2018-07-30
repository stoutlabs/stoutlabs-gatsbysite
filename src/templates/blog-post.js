import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import BlogLayout from '../components/Blog/BlogLayout';
import BlogPostTemplate from '../components/Blog/BlogPostTemplate';
import { HTMLContent } from '../components/Content';

const BlogPost = ({ data }, ...props) => {
  const { markdownRemark: post } = data;
  console.log('context: ', props.context);
  return (
    <BlogLayout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | StoutLabs`} />}
        tags={post.frontmatter.tags}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
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
      }
    }
  }
`;
