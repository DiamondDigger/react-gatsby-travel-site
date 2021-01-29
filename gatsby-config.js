module.exports = {
  siteMetadata: {
    title: `Gatsby Trabel Website`,
    description: `Travel website showcasing the best travel destinations and deals online.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GCMS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "gcms",
        // Url to query from
        url:
          "https://api-eu-central-1.graphcms.com/v2/ckkbiwrvc3fip01z05qph8ctc/master",
      },
    },
  ],
}
