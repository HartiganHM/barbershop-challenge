import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Details from '../Details/Details';
import Header from '../Header/Header';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import StyleGuide from '../StyleGuide/StyleGuide';
import * as actions from '../../actions';

class Routes extends Component {
  componentDidMount() {
    // this.props.populatePhotos();
  }

  render() {
    return (
      <div>
        <Route to="/" render={Header} />
        <Route to="/" component={PhotoContainer} />
        <Route exact to="/styleguide" component={StyleGuide} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  populatePhotos: () => dispatch(actions.populatePhotos())
});

export default connect(null, mapDispatchToProps)(Routes);

Routes.propTypes = {
  populatePhotos: PropTypes.func
};
