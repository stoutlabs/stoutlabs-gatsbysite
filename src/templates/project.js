import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProjectLayout from "../components/Projects/ProjectLayout";
import { HTMLContent } from "../components/Content";

const Project = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProjectLayout
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Project`} />}
        tags={post.frontmatter.tags}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Project;

/*
export const projectQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tools
      }
    }
  }
`;
*/
