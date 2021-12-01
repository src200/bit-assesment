import React, { useState } from 'react';
import Modal from './modal';
import { Button } from '@src200/bit-assesment.ui.button';

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
