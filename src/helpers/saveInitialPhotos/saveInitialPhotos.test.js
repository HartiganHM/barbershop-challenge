import saveInitialPhoto from './saveInitialPhotos';
import mockPhoto from '../../data/mockData/mockPhoto';

global.localStorage = {
  setItem: (key, value) => {
    return (localStorage[key] = value);
  }
};

describe('getSavedPhotos tests', () => {
  it('Should be a function', () => {
    expect(saveInitialPhoto).toBeAFuntion;
  });

  it('Should set photos to localStorage', () => {
    saveInitialPhoto([mockPhoto]);
    const localStorageKey = 'hh-barbershop3';

    expect(localStorage[localStorageKey]).toEqual(JSON.stringify([mockPhoto]));
  });
});
