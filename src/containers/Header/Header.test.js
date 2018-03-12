import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

describe('Header tests', () => {

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

});