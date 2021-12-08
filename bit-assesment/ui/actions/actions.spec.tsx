import React from 'react';
import { render } from '@testing-library/react';
import { BasicActions } from './actions.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicActions />);
  const rendered = getByText('hello from Actions');
  expect(rendered).toBeTruthy();
});
