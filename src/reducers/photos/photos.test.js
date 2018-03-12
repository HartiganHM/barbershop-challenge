import photos from './photos';
import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

describe('Photos reducer tests', () => {
  it('Should return store by default', () => {
    const expected = [];

    expect(photos(undefined, [])).toEqual(expected);
  });

  it('Should return a new store with photos', () => {
    const expected = [mockPhoto];

    expect(photos(undefined, actions.sendPhotosToStore([mockPhoto]))).toEqual(
      expected
    );
  });
});
