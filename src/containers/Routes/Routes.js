import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Details from '../Details/Details';
import Header from '../Header/Header';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import GetPhotosButton from '../GetPhotosButton/GetPhotosButton';
import StyleGuide from '../../components/StyleGuide/StyleGuide';
import StyleGuideButton from '../../components/StyleGuideButton/StyleGuideButton';
import generateUniqueKey from '../../helpers/generateUniqueKey/generateUniqueKey';
import * as actions from '../../actions';

export class Routes extends Component {
  componentDidMount() {
    const { photos, populatePhotos } = this.props;
    populatePhotos(photos.length);
  }

  render() {
    return [
      <Route
        key={generateUniqueKey()}
        exact
        path="/"
        render={() => [
          <Header key={generateUniqueKey()} />,
          <PhotoContainer key={generateUniqueKey()} />,
          <div className="footer-button-wrapper">
            <GetPhotosButton key={generateUniqueKey()} />
            <StyleGuideButton key={generateUniqueKey()} />
          </div>
        ]}
      />,

      <Route
        key={generateUniqueKey()}
        path="/details/:photoId"
        component={Details}
      />,

      <Route
        key={generateUniqueKey()}
        exact
        path="/styleguide"
        component={StyleGuide}
      />
    ];
  }
}

export const mapStateToProps = store => ({
  photos: store.photos
});

export const mapDispatchToProps = dispatch => ({
  populatePhotos: () => dispatch(actions.populatePhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

Routes.propTypes = {
  photos: PropTypes.array,
  populatePhotos: PropTypes.func
};
