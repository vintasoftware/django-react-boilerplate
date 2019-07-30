import React from 'react';
import { shallow } from 'enzyme';

import ColorChanger from '../ColorChanger';

jest.mock('../../ColorDisplay/ColorDisplay');

describe('ColorChanger', () => {
  test('some title', () => {
    const wrapper = shallow(<ColorChanger title="This is a test title" />);

    expect(wrapper).toMatchInlineSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<ColorChanger />);

    expect(wrapper).toMatchInlineSnapshot();
  });
});
