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
  ConfirmationModal,
  NoBackdropModal,
  TopLeftModal,
  TopRightModal,
  BottomLeftModal,
  BottomRightModal,
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
    const { getByText, queryByText } = render(<CloseModalOnOutsideClick />);
    fireEvent.click(getByText('Open Modal'));
    expect(queryByText('Close on Outside Click')).toBeInTheDocument();
    fireEvent.click(document.querySelector('.overlay'));
    expect(queryByText('Close on Outside Click')).not.toBeInTheDocument();
  });
});

describe('SmallModal', () => {
  test('render small modal', () => {
    const { getByText } = render(<SmallModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Small Modal')).toBeInTheDocument();
    expect(document.querySelector('.modal-small')).toBeInTheDocument();
  });
});

describe('LargeModal', () => {
  test('render large modal', () => {
    const { getByText } = render(<LargeModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Large Modal')).toBeInTheDocument();
    expect(document.querySelector('.modal-large')).toBeInTheDocument();
  });
});

describe('NoCloseIconModal', () => {
  test('render modal without close icon', () => {
    const { getByText } = render(<NoCloseIconModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('No Close Icon Modal')).toBeInTheDocument();
    expect(document.querySelector('.withIcon')).not.toBeInTheDocument();
  });
});

describe('FullScreenModal', () => {
  test('render full screen modal', () => {
    const { getByText } = render(<FullScreenModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Full Screen Modal')).toBeInTheDocument();
    expect(document.querySelector('.modalFullScreen')).toBeInTheDocument();
  });
});

describe('FloatingSidebarModal', () => {
  test('render floating sidebar modal', () => {
    const { getByText } = render(<FloatingSidebarModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Floating Sidebar Modal')).toBeInTheDocument();
    expect(document.querySelector('.modalFullScreen')).toBeInTheDocument();
    expect(document.querySelector('.floatingSideBar')).toBeInTheDocument();
  });
});

describe('EmptyModal', () => {
  test('render empty modal', () => {
    const { getByText } = render(<EmptyModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(document.querySelector('.modal').firstChild).toBeNull();
  });
});

describe('ConfirmationModal', () => {
  test('render confirmation modal', () => {
    const { getByText } = render(<ConfirmationModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Confirmation Modal')).toBeInTheDocument();
    expect(getByText('Confirm')).toBeInTheDocument();
  });
});

describe('NoBackDropModal', () => {
  test('render no backdrop modal', () => {
    const { getByText } = render(<NoBackdropModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('No Backdrop Modal')).toBeInTheDocument();
    expect(document.querySelector('.noOverlay')).toBeInTheDocument();
  });
});

describe('TopLeftModal', () => {
  test('render top left modal', () => {
    const { getByText } = render(<TopLeftModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Top Left Modal')).toBeInTheDocument();
    expect(document.querySelector('.modal-top-left')).toBeInTheDocument();
  });
});

describe('TopRightModal', () => {
  test('render top right modal', () => {
    const { getByText } = render(<TopRightModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Top Right Modal')).toBeInTheDocument();
    expect(document.querySelector('.modal-top-right')).toBeInTheDocument();
  });
});

describe('BottomLeftModal', () => {
  test('render bottom left modal', () => {
    const { getByText } = render(<BottomLeftModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Bottom Left Modal')).toBeInTheDocument();
    expect(document.querySelector('.modal-bottom-left')).toBeInTheDocument();
  });
});

describe('BottomRightModal', () => {
  test('render bottom right modal', () => {
    const { getByText } = render(<BottomRightModal />);
    fireEvent.click(getByText('Open Modal'));
    expect(getByText('Bottom Right Modal')).toBeInTheDocument();
    expect(document.querySelector('.modal-bottom-right')).toBeInTheDocument();
  });
});