import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import ColorChanger from '../ColorChanger';

describe('ColorChanger', () => {
  test('loads and displays default title', async () => {
    render(<ColorChanger />);
    await screen.findByRole('heading', { name: 'React App Loaded!' });
    expect(screen.getByRole('heading', { name: 'React App Loaded!' })).toBeInTheDocument();
  });

  test('loads and displays custom title', async () => {
    render(<ColorChanger title="Custom Title" />);
    await screen.findByRole('heading', { name: 'Custom Title' });
    expect(screen.getByRole('heading', { name: 'Custom Title' })).toBeInTheDocument();
  });

  test('loads and changes color', async () => {
    render(<ColorChanger />);
    await screen.findByLabelText('Color Picker');
    await userEvent.selectOptions(screen.getByLabelText('Color Picker'), 'red');

    const colorDisplayEl = screen.getByTestId('color-display');
    expect(colorDisplayEl).toHaveClass('color-red');
    expect(colorDisplayEl).toHaveTextContent('red');
  });
});
