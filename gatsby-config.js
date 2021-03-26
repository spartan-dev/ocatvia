const dotenv = require('dotenv').config({
  path: `.env`,
});
module.exports = {
  siteMetadata: {
    title: 'octavia',
  },

  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.ACCESS_TOKEN,
        paginationSize: 70,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',

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
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        whitelist: [
          'buttonNext___2mOCa',
          'horizontalSlider___281Ls',
          'horizontalSliderTray___1L-0W',
          'slide___3-Nqo',
          'slide___3-Nqo:focus',
          'slideHorizontal___1NzNV',
          'slideInner___2mfX9',
          'sliderAnimation___300FY',
          'sliderTray___-vHFQ',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/assets/favicon.png',
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
