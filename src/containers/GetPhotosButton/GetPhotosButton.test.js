import React from 'react';
import { shallow } from 'enzyme';
import {
  GetPhotosButton,
  mapStateToProps,
  mapDispatchToProps
} from './GetPhotosButton';
import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

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
    expect(renderedGetPhotosButton).toMatchSnapshot();
  });

  it('Should match imageTotal to number of photos in store', () => {
    const expected = 1;

    expect(renderedGetPhotosButton.state('imageTotal')).toEqual(expected);
  });

  it('Should update imageTotal with handleClick and call getMorePhotos', () => {
    const expected = 7;

    expect(renderedGetPhotosButton.state('imageTotal')).toEqual(1);

    renderedGetPhotosButton.instance().handleClick(photos);

    expect(renderedGetPhotosButton.state('imageTotal')).toEqual(expected);
    expect(getMorePhotos).toHaveBeenCalled();
  });

  it('Should not have a class of loading or a loader if imageTotal matches photos total', () => {
    const expected = 0;

    expect(renderedGetPhotosButton.find('.loading').length).toEqual(expected);
    expect(renderedGetPhotosButton.find('.loader').length).toEqual(expected);
  });

  it('Should have a class of loading and a loader if imageTotal does not match photos total', () => {
    const expected = 1;

    renderedGetPhotosButton.instance().handleClick(photos);
    renderedGetPhotosButton.update();

    expect(renderedGetPhotosButton.find('.loading').length).toEqual(expected);
    expect(renderedGetPhotosButton.find('.loader').length).toEqual(expected);
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
