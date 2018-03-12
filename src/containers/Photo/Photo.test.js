import React from 'react';
import { shallow } from 'enzyme';
import { Photo, mapDispatchToProps } from './Photo';
import mockPhoto from '../../data/mockData/mockPhoto';
import * as actions from '../../actions';

describe('Photo tests', () => {

});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when sendSelectedPhotoToStore is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.sendSelectedPhotoToStore();
    expect(mockDispatch).toHaveBeenCalled();
  });
});