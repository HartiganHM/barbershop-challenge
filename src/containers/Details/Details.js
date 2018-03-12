/*eslint-disable camelcase*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import iconData from '../../data/iconData';
import PropTypes from 'prop-types';
import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  handleLoad() {
    const loaded = true;
    this.setState({ loaded });
  }

  render() {
    window.scrollTo(0, 0);

    const { selectedPhoto } = this.props;
    const { urls, user } = selectedPhoto;
    const { goBack } = this.props.history;
    const { loaded } = this.state;

    const fullImage = urls.full;
    const regularImage = urls.regular;

    const imageAlt = selectedPhoto.description;
    const userFullName = user.name;
    const userImage = user.profile_image.large;
    const userUsername = '@' + user.username;
    const userProfile = user.links.html;
    const userLocation = user.location;

    const loader = (
      <div className="loader">
        <div />
        <div />
        <div />
        <div />
      </div>
    );

    return (
      <div className="Details">
        <svg
          className="close-icon"
          onClick={() => goBack()}
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

        <div className="wrapper">
          {!loaded && loader}

          <picture>
            <source srcSet={regularImage} media="(max-width: 1260px)" />
            <img
              onLoad={() => this.handleLoad()}
              className="selected-image"
              src={fullImage}
              alt={imageAlt}
            />
          </picture>

          <a className="user-wrapper" target="_blank" href={userProfile}>
            <img className="user-image" src={userImage} alt={userUsername} />

            <h2 className="fullname">{userFullName}</h2>

            <h3 className="username">{userUsername}</h3>
          </a>
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
  }
}

const mapStateToProps = store => ({
  selectedPhoto: store.selectedPhoto
});

export default connect(mapStateToProps, null)(Details);

Details.propTypes = {
  selectedPhoto: PropTypes.object,
  history: PropTypes.object
};
