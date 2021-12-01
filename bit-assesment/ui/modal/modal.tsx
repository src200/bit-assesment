import React from 'react';
import { Overlay } from '@src200/bit-assesment.ui.overlay';
import Header from './header';
import Content from './content';
import Actions from './actions';
import styles from './modal.module.scss';

export type ModalProps = {
  /** flag to disaply the modal */
  isOpen: boolean;
  /** method to close the modal */
  onClose: () => void;
  /** content of the modal */
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children, ...props }: ModalProps) {
  return (
    <Overlay active={isOpen} onClick={onClose}>
      <div aria-modal role="dialog" className={styles.modal} {...props}>
        {children}
      </div>
    </Overlay>
  );
}

export default Object.assign(Modal, {
  Header,
  Content,
  Actions,
});