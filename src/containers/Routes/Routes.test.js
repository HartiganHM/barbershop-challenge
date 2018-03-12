import React from 'react';
import { shallow } from 'enzyme';
import { Routes, mapStateToProps, mapDispatchToProps } from './Routes';
import mockPhoto from '../../data/mockData/mockPhoto';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

describe('Routes tests', () => {
  it('Should match the snapshot', () => {
    const renderedRoutes = shallow(
      <Routes photos={[mockPhoto]} populatePhotos={jest.fn()} />
    );

    expect(renderedRoutes).toMatchSnapshot();
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
  it('Should call dispatch when populatePhotos is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.populatePhotos();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
