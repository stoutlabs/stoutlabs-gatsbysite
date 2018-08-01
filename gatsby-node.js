const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
              title
            }
          }
        }
      }
    }
  `);

  //create blog pages, tag pages
  try {
    const posts = allBlogPosts.data.allMarkdownRemark.edges;

    _.each(posts, (post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `blog${post.node.fields.slug}`,
        tags: post.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(post.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id: post.node.id,
          slug: post.node.fields.slug,
          previous,
          next
        }
      });
    });

    // allBlogPosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //   const id = node.id;

    //   createPage({
    //     path: `blog${node.frontmatter.path || node.fields.slug}`,
    //     tags: node.frontmatter.tags,
    //     component: path.resolve(
    //       `src/templates/${String(node.frontmatter.templateKey)}.js`
    //     ),
    //     context: {
    //       id
    //     }
    //   });
    // });

    let tags = [];

    allBlogPosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.tags !== undefined) {
        tags = tags.concat(node.frontmatter.tags);
      }
    });

    // slick ES6 way to get unique values of an array
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
