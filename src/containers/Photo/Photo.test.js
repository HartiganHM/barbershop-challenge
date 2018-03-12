import React from 'react';
import { shallow } from 'enzyme';
import { Photo, mapDispatchToProps } from './Photo';
import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

describe('Photo tests', () => {
  let photoData;
  let currentView;
  let sendSelectedPhotoToStore;
  let renderedPhoto;

  beforeEach(() => {
    photoData = mockPhoto;
    currentView = 'List';
    sendSelectedPhotoToStore = jest.fn();

    renderedPhoto = shallow(
      <Photo
        photoData={photoData}
        currentView={currentView}
        sendSelectedPhotoToStore={sendSelectedPhotoToStore}
      />
    );
  });

  it('Should match the snapshot', () => {

  });

  it('Should show photo-details-link if currentView is List', () => {

  });

  it('Should not show photo-details-link if currentView is Grid', () => {

  });

  it('Should have a class of list-image if currentView is List', () => {

  });

  it('Should have a class of grid-image if currentView is Grid', () => {

  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when sendSelectedPhotoToStore is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.sendSelectedPhotoToStore();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
