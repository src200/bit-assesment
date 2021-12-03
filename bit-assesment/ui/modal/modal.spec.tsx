import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { BasicModal, CloseModalOnOutsideClick } from './modal.composition';

const bodyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam.';

describe('BasicModal', () => {
  beforeEach(() => {
    const { getByText } = render(<BasicModal />);
    fireEvent.click(getByText('Open Modal'));
  });

  test('render header', () => {
    const { getByText } = render(<BasicModal />);
    expect(getByText('Basic Modal')).toBeInTheDocument();
  });
  test('render body', () => {
    const { getByText } = render(<BasicModal />);
    expect(getByText(bodyText)).toBeInTheDocument();
  });
  test('render footer with close btn', () => {
    const { getByText } = render(<BasicModal />);
    expect(getByText('Close')).toBeInTheDocument();
  });
  test('close modal', () => {
    const { getByText, queryByText } = render(<BasicModal />);
    fireEvent.click(getByText('Close'));
    expect(queryByText('Basic Modal')).not.toBeInTheDocument();
  });
});

describe('CloseModalOnOutsideClick', () => {
  test('close modal on outside click', () => {
    const { getByText, container, queryByText } = render(<CloseModalOnOutsideClick />);
    fireEvent.click(getByText('Open Modal'));
    expect(queryByText('Close on Outside Click')).toBeInTheDocument();
    fireEvent.click(container.querySelector('.overlay'));
    expect(queryByText('Close on Outside Click')).not.toBeInTheDocument();
  });
});
