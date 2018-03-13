import React from 'react';
import { Link } from 'react-router-dom';
import iconData from '../../data/iconData';
import './StyleGuideButton.css';

const StyleGuideButton = () => {
  return (
    <button className="StyleGuideButton">
      <Link to="/styleguide" className="style-wrapper">
        <svg viewBox="0 0 19.3 19.3" className="style-icon">
          <path d={iconData.style} />
        </svg>
        <input className="style-text" type="submit" value="Style Guide" />
      </Link>
    </button>
  );
};

export default StyleGuideButton;
