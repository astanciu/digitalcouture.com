import React from 'react';
import { Link } from 'gatsby';
import { Breadcrumb as BreadcrumbScrap, BreadcrumbItem } from 'reactstrap';

export const BreadCrumb = ({ category, extra }) => {
  if (!category) return null;
  let cat = <Link to={`/categories/${category.slug}`}>{category.name}</Link>;
  let parent;
  if (category.contentfulparent) {
    parent = (
      <Link to={`/categories/${category.contentfulparent.slug}`}>
        {category.contentfulparent.name}
      </Link>
    );
  }

  // let crumb = parent ? <> {parent} > {cat} </> : cat
  // console.log('BreadCrumb: ', category)

  return (
    <BreadcrumbScrap>
      <BreadcrumbItem>
        <Link to={`/`}>Home</Link>
      </BreadcrumbItem>
      {parent && <BreadcrumbItem>{parent}</BreadcrumbItem>}
      <BreadcrumbItem>{cat}</BreadcrumbItem>
      {extra && <BreadcrumbItem>{extra}</BreadcrumbItem>}
    </BreadcrumbScrap>
  );
};
