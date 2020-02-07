import { shallow } from 'enzyme';
import React from 'react';

import ColorChanger from '../ColorChanger';

jest.mock('../../ColorDisplay/ColorDisplay');

describe('ColorChanger', () => {
  test('some title', () => {
    const wrapper = shallow(<ColorChanger title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<ColorChanger />);

    expect(wrapper).toMatchSnapshot();
  });
});
