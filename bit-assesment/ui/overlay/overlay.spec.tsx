import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicOverlay, ToggleOverlay, NoOverlay } from './overlay.composition';

test('should render overlay', () => {
  const { getByText, container } = render(<BasicOverlay />);
  fireEvent.click(getByText('Show Overlay'));
  expect(container.querySelector('.overlay')).toBeInTheDocument();
});

test('should toggle overlay', () => {
  const { getByText, container } = render(<ToggleOverlay />);
  fireEvent.click(getByText('Toggle Overlay'));
  expect(container.querySelector('.overlay')).toBeInTheDocument();
  fireEvent.click(container.querySelector('.overlay'));
  expect(container.querySelector('.overlay')).not.toBeInTheDocument();
});

test('should render without any overlay', () => {
  const { getByText, container } = render(<ToggleOverlay />);
  fireEvent.click(getByText('No Overlay'));
  expect(container.querySelector('.noOverlay')).toBeInTheDocument();
});