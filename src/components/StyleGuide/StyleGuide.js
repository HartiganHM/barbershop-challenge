import React from 'react';
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
        <a className={buttonClass}>
          {button === 'Text + Icon' && plusIcon}
          {button === 'Loader' && loader}
          {button !== 'Loader' && (
            <span className="get-photos-text">Click Me</span>
          )}
        </a>

        <h4 className="button-text">{button}</h4>
      </span>
    );
  });

  return (
    <div className="StyleGuide">
      <h2 className="page-title">Barbershop Challenge Style Guide</h2>

      <div>{renderedButtons}</div>
    </div>
  );
};

export default StyleGuide;
