import React from 'react';
import renderer from 'react-test-renderer';

import ColorDisplay from '../ColorDisplay';


describe('ColorDisplay', () => {
  let Component;
  let tree;

  test('purple', () => {
    Component = renderer.create((
      <ColorDisplay color="purple" />
    ));

    tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('no color (should default to black)', () => {
    Component = renderer.create((
      <ColorDisplay />
    ));

    tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('unknown color', () => {
    Component = renderer.create((
      <ColorDisplay color="caterpillar" />
    ));

    tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
