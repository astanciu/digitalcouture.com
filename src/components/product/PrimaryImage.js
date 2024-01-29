import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import noimg from "../../images/no-image.jpg";

export const PrimaryImage = ({ imageData, resize }) => (
  <div className="primary-image">
    {imageData ? (
      <GatsbyImage image={imageData.gatsbyImageData} alt="" />
    ) : (
      <GatsbyImage image={{ base64: noimg, width: 150, height: 150 }} alt="primary image" />
    )}
  </div>
);
