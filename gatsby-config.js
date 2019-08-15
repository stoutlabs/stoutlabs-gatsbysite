require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
const config = require("./config/index");

module.exports = {
  siteMetadata: {
    title: "Daniel Stout: JavaScript Web Developer and Consultant - Tri-Cities TN and Remote",
    siteUrl: `https://www.stoutlabs.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: `blog-pages`
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "stoutlabs2018",
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          project: require("./src/schemas/project.json"),
          toolbelt: require("./src/schemas/toolbelt.json")
        },
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
        fetchLinks: [
          // Your list of links
        ],
        htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
          // Your HTML serializer
        },
        lang: "*",
        shouldNormalizeImage: ({ node, key, value }) => {
          // Return true to normalize the image or false to skip.
          // console.log("value: ", value);
          // if (value.url && value.url.includes(".svg")) {
          //   console.log("value: ", value);
          //   return false;
          // }
          return true;
        },
        typePathsFilenamePrefix: "prismic-typepaths-stoutlabs"
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: "›",
              aliases: {
                js: "javascript",
                sh: "bash"
              }
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "images"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              quality: 85,
              withWebp: {
                quality: 85
              }
            }
          }
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1076375-4`,
        // Puts tracking script in the head instead of the body
        head: false
        // Setting this parameter is optional
        //anonymize: true,
        // Setting this parameter is also optional
        //respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.stoutlabs.com",
        sitemap: "https://www.stoutlabs.com/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }]
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }]
          }
        }
      }
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
            type: `image/png`
          },
          {
            src: `/site-images/android-chrome-512x512.jpg`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },

    `gatsby-plugin-netlify`
  ]
};
