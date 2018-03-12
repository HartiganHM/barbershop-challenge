import React from 'react';
import { shallow } from 'enzyme';
import StyleGuideButton from './StyleGuideButton';

describe('StyleGuideButton tests', () => {
  it('Should match the snapshot', () => {
    const renderStyleGuideButton = shallow(<StyleGuideButton />);

    expect(renderStyleGuideButton).toMatchSnapshot();
  });
});
