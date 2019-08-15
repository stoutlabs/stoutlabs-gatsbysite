const slugify = require('slugify');
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
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
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

    posts.forEach((post, index) => {
      // set up prev/next links for each article
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
      const previous = index === 0 ? null : posts[index - 1].node;

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

    let tags = [];

    posts.forEach(({ node }) => {
      if (node.frontmatter.tags !== undefined) {
        tags = tags.concat(node.frontmatter.tags);
      }
    });

    const uniqueTags = [...new Set(tags)];

    uniqueTags.forEach(tag => {
      // console.log("tag: ", tag);
      const tagPath = `/tags/${slugify(tag)}/`;

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
