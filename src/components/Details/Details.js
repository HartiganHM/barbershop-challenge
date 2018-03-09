import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Details.css';

const Details = () => {
  return (
    <div className="Details">
      <h1>Yo! ME DUH DETAILS</h1>
    </div>
  );
};

const mapStateToProps = store => ({
  selectedPhoto: store.selectedPhoto;
});

export default connect(mapStateToProps, null)(Details);

Details.propTypes = {
  selectedPhoto: PropTypes.object
};
