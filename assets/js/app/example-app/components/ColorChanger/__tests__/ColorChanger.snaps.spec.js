import React from 'react';
import renderer from 'react-test-renderer';

import ColorChanger from '../ColorChanger';

jest.mock('../../ColorDisplay/ColorDisplay');


describe('ColorChanger', () => {
  let Component;
  let tree;

  test('Some title', () => {
    Component = renderer.create(
      <ColorChanger title="This is a test title" />);

    tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('No title (should use default)', () => {
    Component = renderer.create(
      <ColorChanger />);

    tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
