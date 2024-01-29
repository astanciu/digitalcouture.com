import { get } from "lodash";
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import noimg from "../images/no-image.jpg";

export const ProductThumbnail = ({ product }) => {
  let prodImg = product?.primaryImage?.gatsbyImageData;
  let Image = prodImg ? <GatsbyImage image={prodImg} alt="Product Image" /> : <img src={noimg} alt="Not found" />;

  return (
    <div className="product-thumbnail">
      <Link to={`/products/${product.slug}`}>
        <div className="product-thumbnail-image">
        {Image}
        </div>
        <div className="product-title">{product.title}</div>
      </Link>
    </div>
  );
};
