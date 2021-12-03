import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton, PrimaryButton } from './button.composition';

test('should render a button', () => {
  const { getByText } = render(<BasicButton />);
  expect(getByText('Basic')).toBeInTheDocument();
});

test('should render a primary button', () => {
  const { getByText } = render(<PrimaryButton />);
  expect(getByText('Primary')).toBeInTheDocument();
  expect(getByText('Primary')).toHaveClass('primary');
});
