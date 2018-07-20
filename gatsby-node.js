const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const allBlogPosts = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              tags
            }
          }
        }
      }
    }
  `);

  const allProjects = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "project" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              tags
            }
          }
        }
      }
    }
  `);

  //create blog pages, tag pages
  try {
    allBlogPosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const id = node.id;

      createPage({
        path: node.frontmatter.path || node.fields.slug,
        tags: node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {
          id
        } // additional data can be passed via context
      });
    });

    let tags = [];

    allBlogPosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.tags !== undefined) {
        tags = tags.concat(node.frontmatter.tags);
      }
    });

    const uniqueTags = [...new Set(tags)];

    uniqueTags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });
  } catch (e) {
    console.log('Error: ', e);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
