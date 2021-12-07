import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicOverlay, ToggleOverlay, NoOverlay } from './overlay.composition';

test('should render overlay', () => {
  const { getByText } = render(<BasicOverlay />);
  fireEvent.click(getByText('Show Overlay'));
  expect(document.querySelector('.overlay')).toBeInTheDocument();
});

test('should toggle overlay', () => {
  const { getByText } = render(<ToggleOverlay />);
  fireEvent.click(getByText('Toggle Overlay'));
  expect(document.querySelector('.overlay')).toBeInTheDocument();
  fireEvent.click(document.querySelector('.overlay'));
  expect(document.querySelector('.overlay')).not.toBeInTheDocument();
});

test('should render without any overlay', () => {
  const { getByText } = render(<NoOverlay />);
  fireEvent.click(getByText('No Overlay'));
  expect(document.querySelector('.noOverlay')).toBeInTheDocument();
});