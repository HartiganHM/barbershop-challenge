import getSavedPhotos from './getSavedPhotos';
import mockPhoto from '../../data/mockData/mockPhoto';

const mockStoredPhotos = { 'hh-barbershop3': [mockPhoto] };

global.localStorage = {
  getItem: () => JSON.stringify(mockStoredPhotos)
};

describe('getSavedPhotos tests', () => {
  it('Should be a function', () => {
    expect(getSavedPhotos).toBeAFuntion;
  });

  it('Should return photos from localStorage', () => {
    const mockReturn = getSavedPhotos();

    expect(typeof mockReturn).toEqual('object');
  });
});
