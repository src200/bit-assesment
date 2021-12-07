import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {
  BasicModal,
  CloseModalOnOutsideClick,
  SmallModal,
  LargeModal,
  NoCloseIconModal,
  FullScreenModal,
  FloatingSidebarModal,
  EmptyModal,
  ConfirmationModal
} from './modal.composition';


describe('BasicModal', () => {
  const bodyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam.';

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

describe('SmallModal', () => {
  test('render small modal', () => {
    const { getByText, container } = render(<SmallModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Small Modal')).toBeInTheDocument();
    expect(container.querySelector('.modalSmall')).toBeInTheDocument();
  });
});

describe('LargeModal', () => {
  test('render large modal', () => {
    const { getByText, container } = render(<LargeModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Large Modal')).toBeInTheDocument();
    expect(container.querySelector('.modalLarge')).toBeInTheDocument();
  });
});

describe('NoCloseIconModal', () => {
  test('render modal without close icon', () => {
    const { getByText, container } = render(<NoCloseIconModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('No Close Icon Modal')).toBeInTheDocument();
    expect(container.querySelector('.withIcon')).not.toBeInTheDocument();
  });
});

describe('FullScreenModal', () => {
  test('render full screen modal', () => {
    const { getByText, container } = render(<FullScreenModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Full Screen Modal')).toBeInTheDocument();
    expect(container.querySelector('.modalFullScreen')).toBeInTheDocument();
  });
});

describe('FloatingSidebarModal', () => {
  test('render floating sidebar modal', () => {
    const { getByText, container } = render(<FloatingSidebarModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Floating Sidebar Modal')).toBeInTheDocument();
    expect(container.querySelector('.modalFullScreen')).toBeInTheDocument();
    expect(container.querySelector('.floatingSideBar')).toBeInTheDocument();
  });
});

describe('EmptyModal', () => {
  test('render empty modal', () => {
    const { getByText, container } = render(<EmptyModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(container.querySelector('.modal').firstChild).toBeNull();
  });
});

describe('ConfirmationModal', () => {
  test('render confirmation modal', () => {
    const { getByText, container } = render(<ConfirmationModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Confirmation Modal')).toBeInTheDocument();
    expect(getByText('Confirm')).toBeInTheDocument();
  });
});