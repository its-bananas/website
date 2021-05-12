module.exports = {
  siteMetadata: {
    title: `itsBananas`,
    description: `A social community`,
    author: `@itsBananas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `its-bananas`,
        short_name: `bananas`,
        start_url: `/`,
        background_color: `#9AA7AF`,
        theme_color: `#FED619`,
        display: `minimal-ui`,
        icon: `src/components/Seo/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
