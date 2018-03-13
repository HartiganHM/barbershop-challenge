import React, { Component } from 'react';
import { connect } from 'react-redux';
import iconData from '../../data/iconData';
import generateUniqueKey from '../../helpers/generateUniqueKey/generateUniqueKey';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './GetPhotosButton.css';

export class GetPhotosButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageTotal: 0
    };
  }

  componentDidMount() {
    const imageTotal = this.props.photos.length;

    this.setState({ imageTotal });
  }

  handleClick(photos) {
    const { getMorePhotos } = this.props;
    const imageTotal = this.state.imageTotal + 6;

    this.setState({ imageTotal });
    getMorePhotos(photos.length);
  }

  render() {
    const { imageTotal } = this.state;
    const { photos } = this.props;

    const currentClass =
      imageTotal === photos.length
        ? 'GetPhotosButton'
        : 'GetPhotosButton loading';

    const enabledButton = [
      <svg
        key={generateUniqueKey()}
        viewBox="0 0 13.33 13.33"
        className="plus-icon"
      >
        <path d={iconData.getPhotos} />
      </svg>,
      <input key={generateUniqueKey()} className="get-photos-text" type="submit" value="Get Photos" />
    ];

    const loader = (
      <div className="loader">
        <div />
        <div />
        <div />
        <div />
      </div>
    );

    return (
      <button className={currentClass} onClick={() => this.handleClick(photos)}>
        <a className="wrapper">{imageTotal === photos.length ? enabledButton : loader}</a>
      </button>
    );
  }
}

export const mapStateToProps = store => ({
  photos: store.photos
});

export const mapDispatchToProps = dispatch => ({
  getMorePhotos: currentPhotoLength =>
    dispatch(actions.getMorePhotos(currentPhotoLength))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetPhotosButton);

GetPhotosButton.propTypes = {
  photos: PropTypes.array,
  getMorePhotos: PropTypes.func
};
