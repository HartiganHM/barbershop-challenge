import getPhotos from '../helpers/getPhotos/getPhotos';

export const populatePhotos = () => async dispatch => {
  const photos = await getPhotos();
  dispatch(sendPhotosToStore());
};

export const sendPhotosToStore = photos => ({
  type: 'PHOTOS_TO_STORE',
  photos
});