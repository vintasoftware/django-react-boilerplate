import { shallow } from 'enzyme';
import React from 'react';

import ColorDisplay from '../ColorDisplay';

describe('ColorDisplay', () => {
  test('purple', () => {
    const wrapper = shallow(<ColorDisplay color="purple" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no color (should default to black)', () => {
    const wrapper = shallow(<ColorDisplay />);

    expect(wrapper).toMatchSnapshot();
  });

  test('unknown color', () => {
    const wrapper = shallow(<ColorDisplay color="caterpillar" />);

    expect(wrapper).toMatchSnapshot();
  });
});
