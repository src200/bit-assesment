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
        <Modal.Header title="Basic Modal" />
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
        <Modal.Header title="Close on Outside Click" />
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
        <Modal.Header title="Small Modal" />
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
        <Modal.Header title="Large Modal" />
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
        <Modal.Header title="No Close Icon Modal" />
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
        <Modal.Header title="Full Screen Modal" />
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
      <Modal className={styles.floatingSideBar} isOpen={isOpen} onClose={() => setIsOpen(false)} fullscreen showCloseIcon>
        <Modal.Header title="Floating Sidebar Modal" />
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
        <Modal.Header title="Confirmation Modal" />
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
        <Modal.Header title="No Backdrop Modal" />
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
        <Modal.Header title="Top Left Modal" />
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
        <Modal.Header title="Top Right Modal" />
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
        <Modal.Header title="Bottom Left Modal" />
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
        <Modal.Header title="Bottom Right Modal" />
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