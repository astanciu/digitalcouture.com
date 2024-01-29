import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Category from './Category';
import { CoreLayout } from '../../components';

export default class CategoryPage extends React.Component {
  render() {
    const cat = get(this, 'props.data.contentfulCategory');
    if (cat.subCategory){
        cat.subCategory.sort((a, b) => {
          return (b.item || []).length - (a.item || []).length
        })
    }
    return (
      <CoreLayout>
        <Category category={cat} />
      </CoreLayout>
    );
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
      slug
      contentfulparent {
        name
        slug
      }
      item {
        title
        slug
        primaryImage {
          gatsbyImageData(layout: FIXED, width: 100, height: 150, resizingBehavior: THUMB)
        }
      }
      subCategory: category {
        name
        slug
        item {
          title
          slug
          primaryImage {
            
            gatsbyImageData(layout: FIXED, width: 100, height: 150, resizingBehavior: THUMB)

          }
        }
      }
    }
  }
`;
