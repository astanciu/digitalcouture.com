import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Product from './Product';
import { CoreLayout } from '../../components';

class ProductPage extends React.Component {
  render() {
    const item = get(this.props, 'data.contentfulItem');
    console.log('Item: ', item);
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <CoreLayout>
        <Product item={item} />
      </CoreLayout>
    );
  }
}

export default ProductPage;


export const pageQuery = graphql`
  query($slug: String!) {
    contentfulItem(slug: { eq: $slug }) {
      contentfulid
      contentful_id
      title
      description {
        description
      }
      slug
      category {
        slug
        name
        contentfulparent {
          slug
          name
        }
      }
      primaryImage {
        contentful_id
        # Good for scarfs
        resize(width: 400 height: 550 resizingBehavior:PAD ) {
          src
          width
          height
          aspectRatio
          base64
        }
        fluid(
          maxWidth: 800
          maxHeight: 1200
          cropFocus:CENTER
          resizingBehavior:THUMB) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      otherImages {
        contentful_id
        fixed(width: 100) {
          width
          height
          src
          srcSet
        }

      }
    }
  }
`;

