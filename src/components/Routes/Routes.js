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
    return(
      <div>
        <h1>I am Routes</h1>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  populatePhotos: () => dispatch(actions.populatePhotos())
})

export default connect(null, mapDispatchToProps)(Routes)