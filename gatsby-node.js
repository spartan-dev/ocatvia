const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const ProductTemplate = path.resolve(
    "./src/templates/ProductPageTemplate.js"
  );
  const CategoryTemplate = path.resolve(
    "./src/templates/CategoryPageTemplate.js"
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
  const categories = await graphql(`
    {
      allShopifyCollection {
        edges {
          node {
            id
            title
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

  categories.data.allShopifyCollection.edges.forEach((edge) => {
    createPage({
      path: `/categories/${edge.node.handle}`,
      component: CategoryTemplate,
      context: {
        id: edge.node.id,
        handle: edge.node.handle,
      },
    });
  });
};
