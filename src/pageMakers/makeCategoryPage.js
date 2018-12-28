const path = require('path');

module.exports = async function makeCategoryPage(createPage, graphql) {
  const categoryPage = path.resolve(
    './src/components/category/CategoryPage.js'
  );
  const result = await graphql(
    `
      {
        allContentfulCategory {
          edges {
            node {
              name
              slug
              contentfulparent {
                name
                slug
              }
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

  const items = result.data.allContentfulCategory.edges;
  items.forEach((item, index) => {
    createPage({
      path: `/categories/${item.node.slug}/`,
      component: categoryPage,
      context: {
        slug: item.node.slug
      }
    });
  });
};
