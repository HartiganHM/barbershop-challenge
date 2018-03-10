/*eslint-disable camelcase*/

import React from 'react';
import { connect } from 'react-redux';
import iconData from '../../data/iconData';
import PropTypes from 'prop-types';
import './Details.css';

const Details = props => {
  window.scrollTo(0, 0);

  const { selectedPhoto } = props;
  const { push } = props.history;

  const imageSource = selectedPhoto.urls.regular;
  const imageAlt = selectedPhoto.description;
  const userFullName = selectedPhoto.user.name;
  const userImage = selectedPhoto.user.profile_image.large;
  const userUsername = '@' + selectedPhoto.user.username;
  const userLocation = selectedPhoto.user.location;

  return (
    <div className="Details">
      <svg
        className="close-icon"
        onClick={() => push('/')}
        viewBox="0 0 17.99 17.99"
      >
        <rect
          x="8.5"
          y="-3.22"
          width="1"
          height="24.44"
          transform="translate(-3.73 8.99) rotate(-45)"
        />
        <rect
          x="8.5"
          y="-3.21"
          width="1"
          height="24.43"
          transform="translate(8.99 -3.73) rotate(45)"
        />
      </svg>

      <div className="user-wrapper">
        <img className="selected-image" src={imageSource} alt={imageAlt} />
        <img className="user-image" src={userImage} alt={userUsername} />
        <h2 className="fullname">{userFullName}</h2>
        <h3 className="username">{userUsername}</h3>
      </div>
      <span className="location-wrapper">
        <svg
          className="location-icon"
          width="15"
          height="20"
          viewBox="0 0 15 20"
        >
          <path d={iconData.location} />
        </svg>

        <h4 className="location">
          {userLocation ? userLocation : 'None Listed'}
        </h4>
      </span>
    </div>
  );
};

const mapStateToProps = store => ({
  selectedPhoto: store.selectedPhoto
});

export default connect(mapStateToProps, null)(Details);

Details.propTypes = {
  selectedPhoto: PropTypes.object,
  history: PropTypes.object
};
