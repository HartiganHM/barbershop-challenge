import React from 'react';
import { shallow } from 'enzyme';
import { Routes, mapStateToProps, mapDispatchToProps } from './Routes';
import mockPhoto from '../../data/mockData/mockPhoto';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

describe('Routes tests', () => {

});

describe('mapStateToProps tests', () => {
  it('Should pull photos from store', () => {
    const photos = [mockPhoto];
    const mockStore = { photos };
    const result = mapStateToProps(mockStore);

    expect(result.photos).toEqual(mockStore.photos);
  });
});

describe('mapDispatchToProps tests', () => {

});
