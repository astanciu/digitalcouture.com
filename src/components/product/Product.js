import React from 'react';
import MediaQuery from 'react-responsive';
import { PrimaryImage } from './PrimaryImage';
import { OtherImages } from './OtherImages';
import { BreadCrumb } from '../';
import './product.css';
class Product extends React.Component {
  render() {
    const item = this.props.item;
    let imageData = item.primaryImage;
    let resize = ['oblong-scarfs'].includes(item.category.slug);
    const layout1 = (
      <>
        <h1 className="title">{item.title}</h1>
        <PrimaryImage imageData={imageData} resize={resize} />
        <div className="prod-details">
          <OtherImages item={item} />
          <p className="prod-desc">{item.description.description}</p>
        </div>
      </>
    );

    const layout2 = (
      <>
        <PrimaryImage imageData={imageData} resize={resize} />
        <div className="prod-details">
          <h1 className="title">{item.title}</h1>
          <p className="prod-desc">{item.description.description}</p>
          <OtherImages item={item} />
        </div>
      </>
    );
    return (
      <>
        <BreadCrumb category={item.category} extra={item.title} />
        <div className="prod">
          <MediaQuery maxDeviceWidth={450}>
            {matches => {
              if (matches) {
                return layout1;
              } else {
                return layout2;
              }
            }}
          </MediaQuery>
        </div>
      </>
    );
  }
}

export default Product;
