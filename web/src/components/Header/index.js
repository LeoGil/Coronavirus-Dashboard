import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import rootpath from '../../services/getRootPath';

import logo from '../../assets/logo.png';

const Header = () => (
  <div id="main-header" className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight-normal ">
      <div className="blobs-container">
        <img
          src={logo}
          alt='Covid Dashboard'
          className='logo mx-2'
        />
        <Link to={rootpath} className="text-white mt-2">
          DASHBOARD
        </Link>
        <div className="blob red"></div>
      </div>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link to={rootpath} className="p-2 text-white">Features</Link>
    </nav>
    {/* <a class="btn btn-outline-primary" href="#">Sign up</a> */}
  </div>
)

export default Header