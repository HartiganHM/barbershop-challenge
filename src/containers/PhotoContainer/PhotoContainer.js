import React from 'react';
import { connect } from 'react-redux';
import Photo from '../Photo/Photo';
import generateUniqueKey from '../../helpers/generateUniqueKey/generateUniqueKey';
import PropTypes from 'prop-types';
import './PhotoContainer.css';

export const PhotoContainer = props => {
  const { photos, currentView } = props;
  const currentClass = 'PhotoContainer ' + currentView;

  const renderedPhotos = photos.map(photo => {
    return (
      <Photo
        key={generateUniqueKey()}
        photoData={photo}
        currentView={currentView}
      />
    );
  });

  return <div className={currentClass}>{renderedPhotos}</div>;
};

export const mapStateToProps = store => ({
  photos: store.photos,
  currentView: store.currentView
});

export default connect(mapStateToProps, null)(PhotoContainer);

PhotoContainer.propTypes = {
  photos: PropTypes.array,
  currentView: PropTypes.string
};
