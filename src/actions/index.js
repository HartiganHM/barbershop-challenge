import getPhotos from '../helpers/getPhotos/getPhotos';
import saveInitialPhotos from '../helpers/saveInitialPhotos/saveInitialPhotos';
import getSavedPhotos from '../helpers/getSavedPhotos/getSavedPhotos';

export const populatePhotos = () => async dispatch => {
  let photos = getSavedPhotos();

  if (!photos) {
    photos = await getPhotos();
  }

  saveInitialPhotos(photos);
  dispatch(sendPhotosToStore(photos));
};

export const sendPhotosToStore = photos => ({
  type: 'PHOTOS_TO_STORE',
  photos
});

export const changePhotosView = selectedView => ({
  type: 'CHANGE_VIEW',
  selectedView
});

export const sendSelectedPhotoToStore = selectedPhoto => ({
  type: 'SET_SELECTED_PHOTO',
  selectedPhoto
});
