import React from 'react';
import { shallow } from 'enzyme';

import ColorDisplay from '../ColorDisplay';

describe('ColorDisplay', () => {
  test('purple', () => {
    const wrapper = shallow(<ColorDisplay color="purple" />);

    expect(wrapper).toMatchInlineSnapshot();
  });

  test('no color (should default to black)', () => {
    const wrapper = shallow(<ColorDisplay />);

    expect(wrapper).toMatchInlineSnapshot();
  });

  test('unknown color', () => {
    const wrapper = shallow(<ColorDisplay color="caterpillar" />);

    expect(wrapper).toMatchInlineSnapshot();
  });
});
