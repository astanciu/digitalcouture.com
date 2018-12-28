import React from 'react'
import Img from 'gatsby-image'

export class OtherImages extends React.Component {
  render() {
    const images = (this.props.item.otherImages || []).map(i => 
    <div className="other-image" key={i.contentful_id}>
    <Img fixed={i.fixed} />
    </div>)
    
    return (
      <div className="other-images">
      {images}
      </div>
    )
  }
}




