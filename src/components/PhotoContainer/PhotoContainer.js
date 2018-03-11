import React from 'react';
import { connect } from 'react-redux';
import Photo from '../Photo/Photo';
import PropTypes from 'prop-types';
import './PhotoContainer.css';

const PhotoContainer = props => {
  const { photos, currentView } = props;
  const currentClass = 'PhotoContainer ' + currentView;

  const renderedPhotos = photos.map(photo => {
    return <Photo key={photo.id} photoData={photo} currentView={currentView} />;
  });

  return <div className={currentClass}>{renderedPhotos}</div>;
};

const mapStateToProps = store => ({
  photos: store.photos,
  currentView: store.currentView
});

export default connect(mapStateToProps, null)(PhotoContainer);

PhotoContainer.propTypes = {
  photos: PropTypes.array,
  currentView: PropTypes.string
};
