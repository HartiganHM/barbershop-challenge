import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = props => {
  const { photoData, currentView } = props;
  const imageUrl = photoData.links.html;
  const imageSource = photoData.urls.small;

  return (
    <div className="Photo">
      <img className="photo-image" src={imageSource} />
      <a className="photo-details-link">{imageUrl}</a>
    </div>
  );
};

export default Photo;

Photo.propTypes = {
  photoData: PropTypes.object,
  currentView: PropTypes.string
};
