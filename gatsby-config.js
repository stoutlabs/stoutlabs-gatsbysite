module.exports = {
  siteMetadata: {
    title: 'StoutLabs - Gatsby v2 Edition'
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
    //  {
    //    resolve: `gatsby-plugin-typography`,
    //    options: {
    //      pathToConfigModule: `src/utils/typography.js`
    //    }
    //  },

    `gatsby-plugin-styled-components`
  ]
};
