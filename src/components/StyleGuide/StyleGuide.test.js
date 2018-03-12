import React from 'react';
import { shallow } from 'enzyme';
import StyleGuide from './StyleGuide';

describe('StyleGuide tests', () => {
  it('Should match the snapshot', () => {
    const renderedStyleGuide = shallow(<StyleGuide />);

    expect(renderedStyleGuide).toMatchSnapshot();
  });
});
