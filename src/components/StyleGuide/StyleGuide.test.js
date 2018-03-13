import React from 'react';
import { shallow } from 'enzyme';
import StyleGuide from './StyleGuide';

jest.mock('../../helpers/generateUniqueKey/generateUniqueKey.js', () => {
  return jest.fn(() => 1);
});

describe('StyleGuide tests', () => {
  it('Should match the snapshot', () => {
    const renderedStyleGuide = shallow(<StyleGuide />);

    expect(renderedStyleGuide).toMatchSnapshot();
  });
});
