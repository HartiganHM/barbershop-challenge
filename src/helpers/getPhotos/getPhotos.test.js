import getPhotos from './getPhotos';
import mockPhoto from '../../data/mockData/mockPhoto';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([mockPhoto])
  })
);

describe('getPhotos tests', () => {
  it('Should be a function', () => {
    
  });

  it('Should be called with the correct parameters', () => {

  });

  it('Should throw an error if the promise does not resolve', () => {

  });
});
