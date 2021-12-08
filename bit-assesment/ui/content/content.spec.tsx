import React from 'react';
import { render } from '@testing-library/react';
import { BasicContent } from './content.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicContent />);
  expect(getByText('Hello World')).toBeInTheDocument();
});
