import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicModal } from './modal.composition';

describe('BasicModal', () => {
  test('render header', () => {
    render(<BasicModal />);
    const rendered = screen.getByText('hello from Modal');
    expect(rendered).toBeTruthy();
  });
});
