import React from 'react';
import { shallow } from 'enzyme';

import ColorDisplay from '../ColorDisplay';


describe('ColorDisplay', () => {
  test('purple', () => {
    const wrapper = shallow((
      <ColorDisplay color="purple" />
    ));

    expect(wrapper).toMatchSnapshot();
  });

  test('no color (should default to black)', () => {
    const wrapper = shallow((
      <ColorDisplay />
    ));

    expect(wrapper).toMatchSnapshot();
  });

  test('unknown color', () => {
    const wrapper = shallow((
      <ColorDisplay color="caterpillar" />
    ));

    expect(wrapper).toMatchSnapshot();
  });
});
