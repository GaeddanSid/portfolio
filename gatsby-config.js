/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
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
        accessToken: "XiEpOgNtYtSzvW--wkmx1eFIOQVpFSyjfS-cdBlsm7w",
        spaceId: "2jw7ja0wxioc",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
