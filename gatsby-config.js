module.exports = {
  siteMetadata: {
    title: 'StoutLabs - Gatsby v2 Edition',
    siteUrl: `https://www.stoutlabs.com/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog/`,
        name: `blog-pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        publicPath: `admin`,
        htmlTitle: `CMS, Mang.`
      }
    },
    `gatsby-plugin-netlify`
  ]
};
