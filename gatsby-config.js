const fetch = require(`node-fetch`)
const { createHttpLink } = require(`apollo-link-http`)

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
   pathPrefix: `/`,
   siteMetadata: {
      title: 'Mario Arranz',
      author: 'Mario Arranz',
      description: 'Mario Arranz, Developer',
      siteUrl: 'https://marioarranz.com'
   },
   plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
         resolve: 'gatsby-plugin-typography',
         options: {
            pathToConfigModule: 'src/utils/typography.js',
         }

      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'img',
            path: `${__dirname}/static/images/`,
         }
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'pages',
            path: `${__dirname}/src/pages/`,
         }
      },
      {
         resolve: 'gatsby-transformer-remark',
         options: {
            plugins: [
               {
                  resolve: `gatsby-remark-images`,
                  options: {
                     maxWidth: 590,
                     sizeByPixelDensity: true,
                  },
               },
               {
                  resolve: `gatsby-remark-responsive-iframe`,
                  options: {
                     wrapperStyle: `margin-bottom: 1.0725rem`,
                  },
               },
               {
                  resolve: `gatsby-remark-autolink-headers`,
                  options: {
                     offsetY: `75`,
                  }
               },
               {
                  resolve: 'gatsby-remark-emojis',
                  options: {
                     active: true,
                     class: 'emoji-icon',
                     size: 64,
                     styles: {
                        display: 'inline',
                        margin: '0',
                        position: 'relative'
                     }
                  }
               },
               'gatsby-remark-external-links',
               'gatsby-remark-prismjs',
               'gatsby-remark-copy-linked-files',
               'gatsby-remark-smartypants',
            ],
         },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      `gatsby-plugin-catch-links`,
      'gatsby-plugin-sitemap',
      'gatsby-plugin-robots-txt',
      'gatsby-plugin-netlify-cms',
      {
         resolve: `gatsby-plugin-netlify`,
         options: {
            mergeSecurityHeaders: true,
            mergeLinkHeaders: true,
            mergeCachingHeaders: true,
            generateMatchPathRewrites: true,
         },
      },
      {
         resolve: `gatsby-plugin-nprogress`,
         options: {
            color: '#1976d2',
            showSpinner: false
         },
      },
      `gatsby-plugin-offline`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: 'Mario Arranz',
            start_url: '/',
            background_color: '#1976d2',
            theme_color: '#1976d2',
            display: 'minimal-ui',
         },
      },
      `gatsby-plugin-styled-components`,
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: process.env.GOOGLE_ANALYTICS_ID,
         },
      },
      {
         resolve: 'gatsby-source-graphql',
         options: {
           typeName: 'HASURA',
           fieldName: 'hasura',
           createLink: () =>
             createHttpLink({
               uri: `${ process.env.HASURA_GRAPHQL_URL }`,
               headers: {
                 "x-hasura-admin-secret": `${ process.env.HASURA_GRAPHQL_ADMIN_SECRET }`,
               },
               fetch,
             }),
           refetchInterval: 10, // Refresh every 60 seconds for new data
         },
      },
   ],
}
