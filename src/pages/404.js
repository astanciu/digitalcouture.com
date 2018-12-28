import React from 'react';
import { Link } from 'gatsby';
import { CoreLayout } from '../components';

export default () => (
  <CoreLayout>
    <h1>404</h1>
    <p>Page you want isn't here</p>
    <Link to="/">Home</Link>
  </CoreLayout>
);
