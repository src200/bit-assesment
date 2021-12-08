import React from 'react';
import { render } from '@testing-library/react';
import { BasicActions } from './actions.composition';

it('should render with the correct actions', () => {
  const { getByText } = render(<BasicActions />);
  expect(getByText('Cancel')).toBeInTheDocument();
  expect(getByText('Confirm')).toBeInTheDocument();
});
