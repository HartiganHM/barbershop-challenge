import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

describe('Action tests', () => {
  it('sendPhotosToStore should have a type of PHOTOS_TO_STORE', () => {
    const photos = [mockPhoto];
    const expected = {
      type: 'PHOTOS_TO_STORE',
      photos
    };

    expect(actions.sendPhotosToStore(photos)).toEqual(expected);
  });

  it('changePhotosView should have a type of CHANGE_VIEW', () => {
    const selectedView = 'Grid';
    const expected = {
      type: 'CHANGE_VIEW',
      selectedView
    };

    expect(actions.changePhotosView(selectedView)).toEqual(expected);
  });

  it('sendSelectedPhotoToStore should have a type of SET_SELECTED_PHOTO', () => {
    const selectedPhoto = mockPhoto;
    const expected = {
      type: 'SET_SELECTED_PHOTO',
      selectedPhoto
    };

    expect(actions.sendSelectedPhotoToStore(selectedPhoto)).toEqual(expected);
  });
});
