import { get } from 'lodash';
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import noimg from '../images/no-image.jpg';

export const ProductThumbnail = ({ product }) => {

  let prodImg = get(product, 'primaryImage.fixed');
  let Image = prodImg ? <Img fixed={prodImg} /> : <img src={noimg} alt="Not found"/>
  
  return (
    <div className="product-thumbnail">
      <Link to={`/products/${product.slug}`}>
        {Image}
        <div className="product-title">{product.title}</div>
      </Link>
    </div>
  );
};
