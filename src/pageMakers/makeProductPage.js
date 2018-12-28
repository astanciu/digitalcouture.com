const path = require('path')

module.exports = async function makeProductPage(createPage, graphql) {
  const productPage = path.resolve('./src/components/product/ProductPage.js');
  const result = await graphql(
    `
      {
        allContentfulItem {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    console.log(result.errors);
    throw new Error(result.error);
  }

  const items = result.data.allContentfulItem.edges;
  items.forEach((item, index) => {
    createPage({
      path: `/products/${item.node.slug}/`,
      component: productPage,
      context: {
        slug: item.node.slug
      }
    });
  });
}