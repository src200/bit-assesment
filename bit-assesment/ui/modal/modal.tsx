import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Overlay } from '@src200/bit-assesment.ui.overlay';
import Header from './header';
import Content from './content';
import Actions from './actions';
import { ModalContext } from './context';
import styles from './modal.module.scss';

export type ModalProps = {
  /** flag to display the modal */
  isOpen: boolean;
  /** method to close the modal */
  onClose: () => void;
  /** children to render inside the modal */
  children?: React.ReactNode;
  /** modal class */
  className?: string;
  /** modal sizes */
  size?: 'small' | 'medium' | 'large';
  /** close modal on outside click */
  closeOnOutsideClick?: boolean;
  /** fullscreen modal */
  fullscreen?: boolean;
  /** show close icon */
  showCloseIcon?: boolean
};

function Modal({
  isOpen,
  onClose,
  children,
  className,
  size = 'medium',
  closeOnOutsideClick = false,
  fullscreen = false,
  showCloseIcon = true,
  ...props
}: ModalProps) {
  const resolveClasses = useCallback(
    () =>
      classNames(styles.modal, {
        [styles.modalSmall]: size === 'small',
        [styles.modalMedium]: size === 'medium',
        [styles.modalLarge]: size === 'large',
        [styles.modaFullScreen]: fullscreen,
        className
      }), [className, size, fullscreen],
  );

  return (
    <ModalContext.Provider value={{ showCloseIcon, onClose }}>
      <Overlay active={isOpen} onClick={closeOnOutsideClick ? onClose : null}>
        <div role="dialog" className={resolveClasses()} {...props}>
          {children}
        </div>
      </Overlay>
    </ModalContext.Provider>
  );
}

export default Object.assign(Modal, {
  Header,
  Content,
  Actions,
});