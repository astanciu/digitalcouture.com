import React from "react";
import { ProductThumbnail } from "../ProductThumb";
import { BreadCrumb } from "../";
import "./category.css";

const Category = ({ category }) => {
  let subCategories = (category.subCategory || []).map((cat) => <SubCategory subCategory={cat} key={cat.slug} />);

  let products;
  if (category.item && category.item.length > 0) {
    products = (category.item || []).map((p) => <ProductThumbnail product={p} key={p.slug} />);
    products = <div className="subcategory-thumbs">{products}</div>;
  }
  console.log("Category:", category);
  return (
    <>
      <BreadCrumb category={category} />
      <h2>{category.name}</h2>
      {products}
      {subCategories}
    </>
  );
};

const SubCategory = ({ subCategory }) => {
  return (
    <div className="subcategory">
      <h4>{subCategory.name}</h4>
      <div className="subcategory-thumbs">
        {(subCategory.item || []).map((p) => (
          <ProductThumbnail product={p} key={p.slug} />
        ))}
      </div>
    </div>
  );
};

export default Category;
