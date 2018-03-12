import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

describe('Header tests', () => {
  let currentView;
  let changePhotosView;
  let renderedHeader;

  beforeEach(() => {
    currentView = 'List';
    changePhotosView = jest.fn();

    renderedHeader = shallow(
      <Header currentView={currentView} changePhotosView={changePhotosView} />
    );
  });

  it('Should match the snapshot', () => {

  });

  it('Should have one selected class based on currentView', () => {

  });

  it('Should change selected class if currentView is changed', () => {

  });
});

describe('mapStateToProps tests', () => {
  it('Should pull currentView from store', () => {
    const currentView = 'List';
    const mockStore = { currentView };
    const result = mapStateToProps(mockStore);

    expect(result.currentView).toEqual(mockStore.currentView);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call disaptch when changePhotosView is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.changePhotosView();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
