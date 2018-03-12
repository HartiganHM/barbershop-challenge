import React from 'react';
import { shallow } from 'enzyme';
import { Details, mapStateToProps } from './Details';
import mockPhoto from '../../data/mockData/mockPhoto';
import mockHistory from '../../data/mockData/mockHistory';

window.scrollTo = jest.fn();

describe('Details tests', () => {
  let selectedPhoto;
  let history;
  let renderedDetails;

  beforeEach(() => {
    selectedPhoto = mockPhoto;
    history = mockHistory;

    renderedDetails = shallow(
      <Details selectedPhoto={selectedPhoto} history={history} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedDetails).toMatchSnapshot();
  });

  it('Should show a loader before an image has loaded', () => {
    const expected = 1;

    expect(renderedDetails.find('.loader').length).toEqual(expected);
  });

  it('Should change loaded to true when image has loaded', () => {
    const expected = true;

    expect(renderedDetails.state('loaded')).toEqual(false);
    renderedDetails.instance().handleLoad();

    expect(renderedDetails.state('loaded')).toEqual(expected);
  });

  it('Should not show the loader if loaded is true', () => {
    const expected = 0;

    expect(renderedDetails.find('.loader').length).toEqual(1);
    renderedDetails.instance().handleLoad();
    renderedDetails.update();

    expect(renderedDetails.find('.loader').length).toEqual(expected);
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedPhoto from to store', () => {
    const selectedPhoto = mockPhoto;
    const mockStore = { selectedPhoto };
    const result = mapStateToProps(mockStore);

    expect(result.selectedPhoto).toEqual(mockStore.selectedPhoto);
  });
});
