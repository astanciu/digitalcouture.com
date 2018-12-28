import React from 'react';
import NavBar from './navbar';
import { Helmet } from "react-helmet"
import './style.css';

export const CoreLayout = ({ children }) => (
  <div className="app">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Digital Couture</title>
      <link rel="canonical" href="http://digitalcouture.com" />
    </Helmet>
    <NavBar />
    <div className="page">{children}</div>
  </div>
);
