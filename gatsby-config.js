/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://gaeddansid.netlify.app/`,
    menuLinks: [
      {
        name: "Start",
        link: "/",
      },
      {
        name: "Om Mig",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/portfolio",
      },
      {
        name: "Erfarenheter",
        link: "/experience",
      },
      {
        name: "Kontakt",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        spaceId: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
  ],
};
