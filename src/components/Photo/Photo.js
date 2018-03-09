import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = props => {
  const { photoData, currentView } = props;
  const imageUrl = photoData.links.html;
  const imageSource = photoData.urls.small;
  const imageAlt = photoData.description;
  const currentClass = currentView === 'List' ? 'list-image' : 'grid-image';

  return (
    <div className="Photo">
      <img className={currentClass} src={imageSource} alt={imageAlt} />
      {currentView === 'List' && (
        <a className="photo-details-link">{imageUrl}</a>
      )}
    </div>
  );
};

export default Photo;

Photo.propTypes = {
  photoData: PropTypes.object,
  currentView: PropTypes.string
};
