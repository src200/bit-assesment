import React, { useState } from 'react';
import Modal from '.';
import { Button } from '@src200/bit-assesment.ui.button';
import styles from './modal.module.scss';

// Basic Modal with all features
export const BasicModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h3>Basic Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Close modal on clicking outside
export const CloseModalOnOutsideClick = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnOutsideClick>
        <Modal.Header>
          <h3>Close on Outside Click</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Small Modal
export const SmallModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small">
        <Modal.Header>
          <h3>Small Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Large Modal
export const LargeModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="large">
        <Modal.Header>
          <h3>Large Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Modal with no close button in the header
export const NoCloseIconModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} showCloseIcon={false}>
        <Modal.Header>
          <h3>No Close Icon Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}


// FullScreen Modal
export const FullScreenModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} fullscreen>
        <Modal.Header>
          <h3>Full Screen Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Floating Sidebar Modal with custom css
export const FloatingSidebarModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal className={styles.floatingSideBar} isOpen={isOpen} onClose={() => setIsOpen(false)} fullscreen showCloseIcon position="top-left">
        <Modal.Header>
          <h3>Floating Sidebar Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Empty Custom Modal
export const EmptyModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnOutsideClick />
    </>
  );
}

// Confirmation Modal
export const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h3>Confirmation Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={() => setIsOpen(false)}>Confirm</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Modal with no backdrop
export const NoBackdropModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} noBackdrop>
        <Modal.Header>
          <h3>No Backdrop Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Modal positioned at top left
export const TopLeftModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small" position="top-left">
        <Modal.Header>
          <h3>Top Left Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Modal positioned at top right
export const TopRightModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small" position="top-right">
        <Modal.Header>
          <h3>Top Right Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Modal positioned at bottom left
export const BottomLeftModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small" position="bottom-left">
        <Modal.Header>
          <h3>Bottom Left Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

// Modal positioned at bottom right
export const BottomRightModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="small" position="bottom-right">
        <Modal.Header>
          <h3>Bottom Right Modal</h3>
        </Modal.Header>
        <Modal.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quisquam.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}