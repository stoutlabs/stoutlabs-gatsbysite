const slugify = require("slugify");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "react-dom": "@hot-loader/react-dom",
        react: path.resolve("./node_modules/react"),
      },
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const allBlogPosts = await graphql(`
    {
      allMdx(
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

  // create blog pages, tag pages
  const posts = allBlogPosts.data.allMdx.edges;

  try {
    posts.forEach((post, index) => {
      // set up prev/next links for each article
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
      const previous = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `blog${post.node.fields.slug}`,
        tags: post.node.frontmatter.tags,
        // component: path.resolve(
        //   `src/templates/${String(post.node.frontmatter.templateKey)}.js`
        // ),
        // updated to MDX, and don't want to change the template string on old posts
        component: path.resolve(`src/templates/mdx-blog-post.js`),
        context: {
          id: post.node.id,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  } catch (e) {
    console.error("Error creating blog posts: ", e);
  }

  try {
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
        component: path.resolve(`src/templates/tags-single.js`),
        context: {
          tag,
        },
      });
    });
  } catch (e) {
    console.error("Error creating tags: ", e);
  }

  try {
    // Create blog-list pages
    const postsPerPage = 20;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/mdx-posts-list.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  } catch (e) {
    console.error("Error creating blog index pages: ", e);
  }
};
