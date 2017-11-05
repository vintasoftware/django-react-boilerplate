import React from 'react';
import renderer from 'react-test-renderer';

import ColorChanger from '../ColorChanger';


describe('ColorChanger', () => {
  let Component;
  let tree;

  test('green', () => {
    Component = renderer.create(
      <ColorChanger color="green" />);

    tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('unknown color', () => {
    Component = renderer.create(
      <ColorChanger color="caterpillar" />);

    tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
