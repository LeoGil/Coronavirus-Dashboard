import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import HeaderStyles from './styles';
import rootpath from '../../services/getRootPath';

import logo from '../../assets/logo.png';

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <HeaderStyles>
      <Link to={rootpath} className="title-brand">
        <img src={logo} alt="Covid Dashboard" className="logo" />
        DASHBOARD
        <div className="blob red" />
      </Link>
      <div className="header-options">
        <Link to={`${rootpath}Map`}>
          <span role="img" aria-label="globe">🌍</span> Map
        </Link>
        <button type="button" onClick={toggleTheme}>
          {theme.mode === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </div>

    </HeaderStyles >
  );
};

export default Header;
