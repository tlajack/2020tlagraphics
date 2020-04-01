module.exports = {
  siteMetadata: {
    title: `TLA Graphics`,
    description: `2020 version of tlagraphics.com`,
    author: `@tlagraphics`,
  },
  pathPrefix: `/2020-a`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00a19b`,
        theme_color: `#00a19b`,
        display: `minimal-ui`,
        icon: `src/images/tla-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
