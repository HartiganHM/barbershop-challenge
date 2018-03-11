import React from 'react';
import { connect } from 'react-redux';
import Photo from '../Photo/Photo';
import iconData from '../../data/iconData';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './PhotoContainer.css';

const PhotoContainer = props => {
  const { photos, currentView, getMorePhotos } = props;
  const currentClass = 'PhotoContainer ' + currentView;

  const renderedPhotos = photos.map(photo => {
    return <Photo key={photo.id} photoData={photo} currentView={currentView} />;
  });

  return (
    <div className={currentClass}>
      {renderedPhotos}

      <a
        className="get-photos"
        onClick={() => getMorePhotos(photos.length)}
      >
        <svg viewBox="0 0 15 14" className="get-photos-icon">
          <path d={iconData.getPhotos} />
        </svg>

        <span className="get-photos-text">Get Photos</span>
      </a>
    </div>
  );
};

const mapStateToProps = store => ({
  photos: store.photos,
  currentView: store.currentView
});

const mapDispatchToProps = dispatch => ({
  getMorePhotos: currentPhotoLength =>
    dispatch(actions.getMorePhotos(currentPhotoLength))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);

PhotoContainer.propTypes = {
  photos: PropTypes.array,
  currentView: PropTypes.string
};
