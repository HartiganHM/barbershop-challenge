/*eslint-disable camelcase*/

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Details.css';

const Details = props => {
  const { selectedPhoto } = props;
  const imageSource = selectedPhoto.urls.small;
  const imageAlt = selectedPhoto.description;
  const userFullName = selectedPhoto.user.name;
  const userImage = selectedPhoto.user.profile_image.large;
  const userUsername = selectedPhoto.user.username;
  const userLocation = selectedPhoto.user.location;

  return (
    <div className="Details">
      <img src={imageSource} alt={imageAlt} />
      <h3>{userFullName}</h3>
      <img src={userImage} alt={userUsername} />
      {userLocation && (
        <span className="location-wrapper">
          <h4 className="location">{userLocation}</h4>
        </span>
      )}
    </div>
  );
};

const mapStateToProps = store => ({
  selectedPhoto: store.selectedPhoto
});

export default connect(mapStateToProps, null)(Details);

Details.propTypes = {
  selectedPhoto: PropTypes.object
};

//photo
//user image
//username
//location
