import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Details from '../Details/Details';
import Header from '../Header/Header';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import GetPhotosButton from '../GetPhotosButton/GetPhotosButton';
import StyleGuide from '../StyleGuide/StyleGuide';
import * as actions from '../../actions';

class Routes extends Component {
  componentDidMount() {
    const { photos, populatePhotos } = this.props;

    populatePhotos(photos.length);
  }

  render() {
    return [
      <Route
        exact
        path="/"
        render={() => [<Header />, <PhotoContainer />, <GetPhotosButton />]}
      />,
      <Route path="/details/:photoId" component={Details} />,
      <Route exact path="/styleguide" component={StyleGuide} />
    ];
  }
}

const mapStateToProps = store => ({
  photos: store.photos
});

const mapDispatchToProps = dispatch => ({
  populatePhotos: () => dispatch(actions.populatePhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

Routes.propTypes = {
  photos: PropTypes.array,
  populatePhotos: PropTypes.func
};
