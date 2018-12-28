import React from 'react';
import Img from 'gatsby-image';
import noimg from '../../images/no-image.jpg';

export const PrimaryImage = ({ imageData, resize }) => (
  <div className="primary-image">
    {imageData ? (
       resize ? <Img fixed={imageData.resize} /> : <Img fluid={imageData.fluid} />
    ) : (
      <Img fixed={{base64: noimg, width: 150, height: 150}} />
    )}
  </div>
);
