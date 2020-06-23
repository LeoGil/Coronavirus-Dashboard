import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import rootpath from '../../services/getRootPath';

import logo from '../../assets/logo.png';

const Header = () => (
  <div id="main-header">
    <Link to={rootpath} className="title-brand">
      <img src={logo} alt="Covid Dashboard" className="logo" />
      DASHBOARD
      <div className="blob red" />
    </Link>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link to={rootpath} className="p-2 text-white">
        Features
      </Link>
    </nav>
    {/* <a class="btn btn-outline-primary" href="#">Sign up</a> */}
  </div>
);

export default Header;
