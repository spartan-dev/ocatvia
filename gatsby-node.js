const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const ProductTemplate = path.resolve(
    "./src/templates/ProductPageTemplate.js"
  );
  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `);
  pages.data.allShopifyProduct.edges.forEach((edge) => {
    createPage({
      path: `/products/${edge.node.handle}`,
      component: ProductTemplate,
      context: {
        id: edge.node.id,
        handle: edge.node.handle,
      },
    });
  });
};
