import React from 'react';
import { Link } from 'react-router-dom';
import iconData from '../../data/iconData';
import './StyleGuideButton.css';

const StyleGuideButton = () => {
  return (
    <Link to="/styleguide" className="StyleGuideButton">
      <svg viewBox="0 0 19.3 19.3" className="style-icon">
        <path d={iconData.style} />
      </svg>
      <span className="style-text">Style Guide</span>
    </Link>
  );
};

export default StyleGuideButton;
