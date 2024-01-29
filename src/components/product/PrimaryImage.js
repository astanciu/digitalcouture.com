import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import noimg from "../../images/no-image.jpg";

export const PrimaryImage = ({ imageData, resize }) => {
  return (
    <div className="primary-image">
      {imageData ? (
        <GatsbyImage image={imageData.gatsbyImageData} alt="" />
      ) : (
        <img src={noimg} width={150} alt="Image not found" />
      )}
    </div>
  );
};
