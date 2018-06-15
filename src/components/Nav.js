import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = (props) => {
  const menuStyle = {

    color: 'white',
    fontWeight: '100',
    fontSize: '16px',
    paddingLeft: '22px',
    fontFamily: 'Open Sans',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const currentPath = props.location.pathname;

  const getNavClass = (path) => {
    if (currentPath === path) {
      return "nav-current";
    } else {
      return "nav-non-current";
    }
  };

  return (
    <div className="nav">
      <h3 style={menuStyle}>☰ menu</h3>
      <ul>
        <li id="li1" className={getNavClass("/")}>
          <Link to="/">Home</Link>
        </li>

        <li id="li2" className={getNavClass("/projects")}>
          <Link to="/projects">Projects</Link>
          <ul>
            <li id="li21" className={getNavClass("/projects1")}><a href="#">Blog Setup with Webpack</a></li>
            <li id="li22" className={getNavClass("/projects2")}><a href="#">Interviewing</a></li>
        </ul>
        </li>

        <li id="li3" className={getNavClass("/about")}>
          <Link to="/about">Resume & About Me</Link>
        </li>

        <li id="li4">
          <a href="#">Colophon</a>
        </li>


      </ul>
    </div>
  );
};

export default Nav;
