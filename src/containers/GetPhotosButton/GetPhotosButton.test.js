import React from 'react';
import { shallow } from 'enzyme';
import { GetPhotosButton, mapStateToProps, mapDispatchToProps } from './GetPhotosButton';
import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

describe('GetPhotosButton tests', () => {

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
