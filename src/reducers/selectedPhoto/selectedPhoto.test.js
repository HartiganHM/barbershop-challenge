import selectedPhoto from './selectedPhoto';
import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

describe('selectedPhoto reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(selectedPhoto(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a selected photo', () => {
    const expected = mockPhoto;

    expect(
      selectedPhoto(undefined, actions.sendSelectedPhotoToStore(mockPhoto))
    ).toEqual(expected);
  });
});
