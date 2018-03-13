import React from 'react';
import { Link } from 'react-router-dom';
import generateUniqueKey from '../../helpers/generateUniqueKey/generateUniqueKey';
import iconData from '../../data/iconData';
import './StyleGuide.css';

const StyleGuide = () => {
  const buttons = [
    'Text + Icon',
    'Text',
    'Hover / Focus',
    'Active',
    'Disabled',
    'Loader'
  ];
  const buttonClasses = [
    'text-icon',
    'text',
    'hover-focus',
    'active',
    'disabled',
    'loader'
  ];

  const plusIcon = (
    <svg
      key={generateUniqueKey()}
      viewBox="0 0 13.33 13.33"
      className="plus-icon"
    >
      <path d={iconData.getPhotos} />
    </svg>
  );

  const loader = (
    <div className="loading-icon">
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  const renderedButtons = buttons.map((button, index) => {
    const buttonClass = 'button ' + buttonClasses[index];
    return (
      <span key={generateUniqueKey()} className="button-wrapper">
        <button className={buttonClass}>
          <a className="wrapper">
            {button === 'Text + Icon' && plusIcon}
            {button === 'Loader' && loader}
            {button !== 'Loader' && (
              <input className="get-photos-text" type="submit" value="Click Me" />
            )}
          </a>
        </button>

        <h4 className="button-text">{button}</h4>
      </span>
    );
  });

  return (
    <div className="StyleGuide">
      <button className="home-link">
        <Link to="/" className="home-wrapper">
          <svg viewBox="0 0 612 612" className="home-icon">
            <path d={iconData.home} />
          </svg>
          <input className="home-text" type="submit" value="Home" />
        </Link>
      </button>

      <h2 className="page-title">Barbershop Challenge Style Guide</h2>

      <div>{renderedButtons}</div>
    </div>
  );
};

export default StyleGuide;
