import React from 'react';
import { connect } from 'react-redux';
import iconData from '../../data/iconData';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './GetPhotosButton.css';

const GetPhotosButton = props => {
  const { photos, getMorePhotos } = props;

  return (
    <a className="GetPhotosButton" onClick={() => getMorePhotos(photos.length)}>
      <svg viewBox="0 0 15 14" className="get-photos-icon">
        <path d={iconData.getPhotos} />
      </svg>

      <span className="get-photos-text">Get Photos</span>
    </a>
  );
};

const mapStateToProps = store => ({
  photos: store.photos
});

const mapDispatchToProps = dispatch => ({
  getMorePhotos: currentPhotoLength =>
    dispatch(actions.getMorePhotos(currentPhotoLength))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetPhotosButton);

GetPhotosButton.propTypes = {
  photos: PropTypes.array,
  getMorePhotos: PropTypes.func
};
