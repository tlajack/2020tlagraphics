module.exports = {
  siteMetadata: {
    title: `TLA Graphics`,
    description: `Transforming Ideas into Stunning Visuals`,
    url: `https://tlagraphics.ca`,
    siteUrl: `https://tlagraphics.com`,
    twitterUsername: `@tlagraphics`,
    author: `@tlagraphics`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/blog`, `/contactSuccess`, `/resource`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Proza Libre`,
    //         // subsets: [`latin`],
    //         variants: [`700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`],
    //       },
    //     ],
    //     display: "swap",
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-10733405-2",
      },
    },
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
