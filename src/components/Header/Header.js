import React from 'react';
import iconData from '../../data/iconData';
import './Header.css';

const Header = () => {
  const buttons = ['Grid', 'List']
  const renderButtons = buttons.map((button, index) => {
    return (
      <a key={index} className="view-button">
          <svg className="view-icon" width="13" height="10" viewBox="0 0 13 10">
            <path d={iconData[button]} />
          </svg>
          {button}
        </a>
    )
  })
  return (
    <div className="Header">
      <h1>My Photos</h1>

      <span className="button-wrapper">
        {renderButtons}
      </span>
    </div>
  );
};

export default Header;
