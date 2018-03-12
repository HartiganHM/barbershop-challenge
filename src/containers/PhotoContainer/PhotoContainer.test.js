import React from 'react';
import { shallow } from 'enzyme';
import { PhotoContainer, mapStateToProps } from './PhotoContainer';
import mockPhoto from '../../data/mockData/mockPhoto';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

describe('PhotoContainer tests', () => {
  let photos;
  let currentView;
  let renderedPhotoContainer;

  beforeEach(() => {
    photos = [mockPhoto];
    currentView = 'List';

    renderedPhotoContainer = shallow(
      <PhotoContainer photos={photos} currentView={currentView} />
    );
  });

  it('Should match the snapshot', () => {

  });

  it('Should have a class matching the currentView', () => {

  });

  it('Should change class if currentView changes', () => {

  });
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
