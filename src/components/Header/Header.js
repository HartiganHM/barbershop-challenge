import React from 'react';
import iconData from '../../data/iconData';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h1>My Photos</h1>

      <span className="button-wrapper">
        <a className="view-button">
          <svg className="header-icon" width="13" height="10" viewBox="0 0 13 10">
            <path d={iconData.gridIcon} />
          </svg>
          Grid
        </a>

        <a className="view-button">
          <svg className="header-icon" width="13" height="10" viewBox="0 0 13 10">
            <path d={iconData.listIcon} />
          </svg>
          List
        </a>
      </span>
    </div>
  );
};

export default Header;
