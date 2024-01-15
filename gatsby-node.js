const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `);

  // skapar sida för varje projekt med slug som path
  result.data.allContentfulProject.nodes.forEach((node) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};
