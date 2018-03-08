import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as action from '../../actions';

class Routes extends Component {
  render() {
    return(
      <div>
        <h1>I am Routes</h1>
      </div>
    )
  }
}

export default Routes