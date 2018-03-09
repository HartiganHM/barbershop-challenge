/*eslint-disable camelcase*/

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Details.css';

const Details = props => {
  const { selectedPhoto } = props;
  const imageSource = selectedPhoto.urls.regular;
  const imageAlt = selectedPhoto.description;
  const userFullName = selectedPhoto.user.name;
  const userImage = selectedPhoto.user.profile_image.large;
  const userUsername = '@' + selectedPhoto.user.username;
  const userLocation = selectedPhoto.user.location;

  return (
    <div className="Details">
      <img className="selected-image" src={imageSource} alt={imageAlt} />
      <h3 className="fullname" >{userFullName}</h3>
      <img className="user-image" src={userImage} alt={userUsername} />
      <h4 className="username">{userUsername}</h4>
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
