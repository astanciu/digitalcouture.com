import React from 'react';
import { Link, navigate } from 'gatsby';

import './navbar.css';
import logo from './logo.jpg';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  componentDidMount() {
    document.body.addEventListener('click', this.hide);
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.hide);
  }
  hide = e => {
    const isMenuClick = ['nav-sub-item','side-item'].includes(e.target.className);
    if (this.state.isOpen && !isMenuClick) {
      this.toggle();
    }
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  openCategory(slug) {
    navigate(`/categories/${slug}`);
  }
  render() {
    let cat = {
      skirts: 'Skirts',
      tops: 'Tops',
      dresses: 'Dresses',
      jackets: 'Jackets',
      pants: 'Pants',
      ensembles: 'Ensembles',
      accessories: 'Accessories',
      'home-decor': 'Home Decor'
    };
    const dropdownItems = cname =>
      Object.keys(cat).map(slug => (
        <div
          className={cname}
          onClick={() => this.openCategory(slug)}
          key={slug}
        >
          {cat[slug]}
        </div>
      ));

    return (
      <div className="nav">
        <div className="logo">
          <Link to="/"><img alt="logo" src={logo} className="logo" /></Link>
        </div>
        <div className="nav-item wide">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item wide" onClick={this.toggle}>
          Collection
        </div>
        {this.state.isOpen && (
          <div className="nav-sub wide">{dropdownItems('nav-sub-item')}</div>
        )}
        <div className="nav-item wide">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-item narrow">
          <div className="burger" onClick={this.toggle}>
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </div>
          {this.state.isOpen && (
            <div className="side-menu">
              <div className="side-item"> <Link to="/">Home</Link> </div>
              <div className="side-item"> <Link to="/about">About</Link> </div>
              <div className="side-item" id="section">Collection</div>
              {dropdownItems('side-item')}
            </div>
          )}
        </div>
      </div>
    );
  }
}
