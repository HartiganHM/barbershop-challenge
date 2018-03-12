import React from 'react';
import { shallow } from 'enzyme';
import {
  GetPhotosButton,
  mapStateToProps,
  mapDispatchToProps
} from './GetPhotosButton';
import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

describe('GetPhotosButton tests', () => {
  let photos;
  let getMorePhotos;
  let renderedGetPhotosButton;

  beforeEach(() => {
    photos = [mockPhoto];
    getMorePhotos = jest.fn();

    renderedGetPhotosButton = shallow(
      <GetPhotosButton photos={photos} getMorePhotos={getMorePhotos} />
    );
  });

  it('Should match the snapshot', () => {
    
  });

  it('Should match imageTotal to number of photos in store', () => {

  });

  it('Should update imageTotal with handleClick and call getMorePhotos', () => {

  });

  it('Should have a class of loading and a loader if imageTotal does not match photos total', () => {

  });

  it('Should not have a class of loading or a loader if imageTotal matches photos total', () => {

  });
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
  it('Should call dispatch when getMorePhotos is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.getMorePhotos();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
