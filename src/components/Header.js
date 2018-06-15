import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {


  return (
    <div className="my-header" >
      <span id="my-name">François Bouet</span>
      <span className="bullet">•</span>
      <span className="menu-item"><Link to="/">Blog</Link></span>
      <span className="bullet">•</span>
      <span className="menu-item"><Link to="/projects">projects</Link></span>
      <span className="bullet">•</span>
      <span className="menu-item"><Link to="/about">resume</Link></span>
      <span></span>
      <span></span>
      <a className="menu-button" href="#">
        <span className="burger">☰</span><span className="word">Menu</span>
      </a>
    </div>
  );
};

export default Header;
