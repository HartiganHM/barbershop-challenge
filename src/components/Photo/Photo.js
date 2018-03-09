import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = props => {
  const { photoData } = props;
  const imageUrl = photoData.links.html;
  const imageSource = photoData.urls.small;

  return (
    <div className="Photo">
      <img src={imageSource} />
      <a>{imageUrl}</a>
    </div>
  );
};

export default Photo;

Photo.propTypes = {
  photoData: PropTypes.object
};
