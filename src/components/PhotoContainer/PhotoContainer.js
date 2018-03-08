import React from 'react';
import { connect } from 'react-redux';
import Photo from '../Photo/Photo';
import './PhotoContainer.css';

const PhotoContainer = (props) => {
  const { photos } = props;
  const renderedPhotos = photos.map(photo => {
    return <Photo key={photo.id} photoData={photo} />
  });

  return (
    <div className="PhotoContainer">
      {renderedPhotos}
    </div>
  );
};

const mapStateToProps = store => ({
  photos: store.photos
});

export default connect(mapStateToProps, null)(PhotoContainer);
