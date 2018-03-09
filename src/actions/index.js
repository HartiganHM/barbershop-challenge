import getPhotos from '../helpers/getPhotos/getPhotos';
import saveInitialPhotos from '../helpers/saveInitialPhotos/saveInitialPhotos';
import getSavedPhotos from '../helpers/getSavedPhotos/getSavedPhotos';

export const populatePhotos = () => async dispatch => {
  let photos = getSavedPhotos();

  if (!photos) {
    photos = getPhotos();
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
