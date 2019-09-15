require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");
const config = require("./config/index");

const homepageSchema = require("./src/schemas/homepage.json");
const projectSchema = require("./src/schemas/project.json");
const toolbeltSchema = require("./src/schemas/toolbelt.json");

module.exports = {
  siteMetadata: {
    title: config.title,
    siteUrl: config.url,
    description: config.description,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/previews/*`] },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "stoutlabs2018",
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          homepage: homepageSchema,
          project: projectSchema,
          toolbelt: toolbeltSchema,
        },
        // eslint-disable-next-line
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
        fetchLinks: [
          // Your list of links
        ],
        // eslint-disable-next-line
        htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
          // Your HTML serializer
        },
        lang: "*",
        // eslint-disable-next-line
        shouldNormalizeImage: ({ node, key, value }) =>
          // Return true to normalize the image or false to skip.
          // console.log("value: ", value);
          // if (value.url && value.url.includes(".svg")) {
          //   console.log("value: ", value);
          //   return false;
          // }
          true,
        typePathsFilenamePrefix: "prismic-typepaths-stoutlabs",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 81,
              withWebp: {
                quality: 81,
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: "›",
              aliases: {
                js: "javascript",
                sh: "bash",
              },
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "images",
            },
          },
        ],
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: "gatsby-plugin-root-import",
            options: {
              src: path.join(__dirname, "src"),
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1076375-4`,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                enclosure: {
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.featureimg.publicURL,
                },
                custom_elements: [{ "content:encoded": edge.node.html }],
              })),
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        featureimg {
                          publicURL
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Stoutlabs - Web Development Blog | RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.stoutlabs.com",
        sitemap: "https://www.stoutlabs.com/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.titleshort,
        description: config.description,
        start_url: "/",
        background_color: "#141313",
        theme_color: "#99d7e1",
        display: "minimal-ui",
        icons: [
          {
            src: `/site-images/android-chrome-192x192.jpg`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/site-images/android-chrome-512x512.jpg`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },

    `gatsby-plugin-netlify`,
  ],
};
