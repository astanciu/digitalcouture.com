import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

export class OtherImages extends React.Component {
  render() {
    const images = (this.props.item.otherImages || []).map(i => 
    <div className="other-image" key={i.contentful_id}>
    <GatsbyImage image={i.gatsbyImageData} alt="side view"/>
    </div>)
    
    return (
      <div className="other-images">
      {images}
      </div>
    )
  }
}




