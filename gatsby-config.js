module.exports = {
  siteMetadata: {
    title: 'StoutLabs - Gatsby v2 Edition',
    siteUrl: `https://www.stoutlabs.com/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog/`,
        name: `blog-pages`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`
  ]
};
