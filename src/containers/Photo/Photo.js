import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Photo.css';

const Photo = props => {
  const { photoData, currentView, sendSelectedPhotoToStore } = props;
  const imageUrl = photoData.links.html;
  const imageSource = photoData.urls.small;
  const imageAlt = photoData.description;
  const currentClass = currentView === 'List' ? 'list-image' : 'grid-image';

  return (
    <Link
      to={`/details/${photoData.id}`}
      className="Photo"
      onClick={() => sendSelectedPhotoToStore(photoData)}
    >
      <img className={currentClass} src={imageSource} alt={imageAlt} />
      {currentView === 'List' && (
        <h4 className="photo-details-link">{imageUrl}</h4>
      )}
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  sendSelectedPhotoToStore: selectedPhoto =>
    dispatch(actions.sendSelectedPhotoToStore(selectedPhoto))
});

export default connect(null, mapDispatchToProps)(Photo);

Photo.propTypes = {
  photoData: PropTypes.object,
  currentView: PropTypes.string,
  sendSelectedPhotoToStore: PropTypes.func
};
