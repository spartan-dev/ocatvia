const dotenv = require("dotenv").config({
  path: `.env`,
});
module.exports = {
  siteMetadata: {
    title: "octavia",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        verbose: true,
        paginationSize: 50,
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/assets/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
