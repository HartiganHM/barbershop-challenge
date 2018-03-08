import React from 'react';
import { connect } from 'react-redux';
import Photo from '../Photo/Photo';
import './List.css';

const List = (props) => {
  const { photos } = props;
  const renderedPhotos = photos.map((photo, index) => {
    return <Photo photoData={photo} />
  });

  return (
    <div className="List">
      {renderedPhotos}
    </div>
  );
};

const mapStateToProps = store => ({
  photos: store.photos
});

export default connect(mapStateToProps, null)(List);
