import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import List from '../List/List';
import Grid from '../Grid/Grid';
import Details from '../Details/Details';
import StyleGuide from '../StyleGuide/StyleGuide';
import * as actions from '../../actions';

class Routes extends Component {
  componentDidMount() {
    this.props.populatePhotos();
  }

  render() {
    return (
      <div>
        <Route to="/list" component={List} />
        <Route to="/grid" component={Grid} />
        <Route to="/styleguide" component={StyleGuide} />
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
