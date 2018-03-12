import React from 'react';
import { shallow } from 'enzyme';
import { PhotoContainer, mapStateToProps } from './PhotoContainer';
import mockPhoto from '../../data/mockData/mockPhoto';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

describe('PhotoContainer tests', () => {

});

describe('mapStateToProps tests', () => {
  it('Should pull photos and currentView from store', () => {
    const photos = [mockPhoto];
    const currentView = 'List';
    const mockStore = { photos, currentView };
    const result = mapStateToProps(mockStore);

    expect(result.photos).toEqual(mockStore.photos);
    expect(result.currentView).toEqual(mockStore.currentView);
  });
});