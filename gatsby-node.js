const makeProductPage = require('./src/pageMakers/makeProductPage')
const makeCategoryPage = require('./src/pageMakers/makeCategoryPage')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await makeProductPage(createPage, graphql)
  await makeCategoryPage(createPage, graphql)
};


