require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
const config = require('./config/index');

module.exports = {
  siteMetadata: {
    title:
      'Daniel Stout: Web Developer - Websites, Apps, Programming • Tri-Cities TN and Remote',
    siteUrl: `https://www.stoutlabs.com`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'stoutlabs2018',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => doc => {
          // console.log("doc.type:", doc.type);
          // Your link resolver
          //if (doc.type === "theproject") return "/project/" + doc.uid;
          //if (doc.type === "page") return "/" + doc.uid;
          // Fallback for other types, in case new custom types get created
          return '/doc/' + doc.id;
        },
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          //  switch (type) {
          //    // Add a class to paragraph elements
          //    case Elements.paragraph:
          //      return '<p class="paragraph-class">' + children.join('') + '</p>'
          //    // Don't wrap images in a <p> tag
          //    case Elements.image:
          //      return '<img src="' + element.url + '" alt="' + element.alt + '">'
          //    // Add a class to hyperlinks
          //    case Elements.hyperlink:
          //      var target = element.data.target
          //        ? 'target="' + element.data.target + '" rel="noopener"'
          //        : ''
          //      var linkUrl = PrismicDOM.Link.url(element.data, linkResolver)
          //      return (
          //        '<a class="some-link"' +
          //        target +
          //        ' href="' +
          //        linkUrl +
          //        '">' +
          //        content +
          //        '</a>'
          //      )
          //    // Return null to stick with the default behavior for all other elements
          //    default:
          //      return null
          //  }
        }
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
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: '›',
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {}
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'images'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.stoutlabs.com',
        sitemap: 'https://www.stoutlabs.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
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
        start_url: '/',
        background_color: '#141313',
        theme_color: '#99d7e1',
        display: 'minimal-ui',
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
