import getPhotos from './getPhotos';
import mockUnsplashResponse from '../../data/mockData/mockUnsplashResponse';
import mockPhoto from '../../data/mockData/mockPhoto';

jest.mock('../../helpers/unsplash/unsplash.js', () => {
  return {
    photos: {
      listPhotos: jest.fn(() => mockUnsplashResponse)
    }
  }
})

describe('getPhotos tests', () => {
  it('Should be a function', () => {
    expect(getPhotos).toBeAFunction;
  });

  it('Should return an array', async () => {
    const photos = [mockPhoto];
    const response = await getPhotos(photos);

    expect(typeof response).toEqual('object');
  });

  it('Should not throw an error if there are no current photos', async () => {
    const photos = [];
    const response = await getPhotos(photos);

    expect(typeof response).toEqual('object');
  });
});
