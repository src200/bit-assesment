import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Overlay as ModalBackDrop } from '@src200/bit-assesment.ui.overlay';
import { ModalContext } from './context';
import styles from './modal.module.scss';

export type ModalProps = {
  /** flag to display the modal */
  isOpen: boolean;
  /** method to close the modal */
  onClose: () => void;
  /** children to render inside the modal */
  children?: ReactNode;
  /** modal class */
  className?: string;
  /** modal sizes */
  size?: 'small' | 'medium' | 'large';
  /** close modal on outside click */
  closeOnOutsideClick?: boolean;
  /** fullscreen modal */
  fullscreen?: boolean;
  /** show close icon */
  showCloseIcon?: boolean;
  /** custom backdrop classname */
  customBackdropClassName?: string;
  /** modal with no backdrop */
  noBackdrop?: boolean;
  /** render modal into a traget HTMLElement */
  targetElement?: HTMLElement;
  /** modal position */
  position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  customBackdropClassName,
  size = 'medium',
  closeOnOutsideClick = false,
  fullscreen = false,
  showCloseIcon = true,
  noBackdrop = false,
  targetElement,
  position = 'center',
  ...props
}: ModalProps) {
  const resolveClasses = classNames(styles.modal, {
    [className]: className,
    [styles[`modal-${size}`]]: size,
    [styles[`modal-${position}`]]: position,
    [styles.modalFullScreen]: fullscreen
  });

  return (
    <ModalContext.Provider value={{ isOpen, showCloseIcon, onClose }}>
      <ModalBackDrop
        active={isOpen}
        onClick={closeOnOutsideClick ? onClose : null}
        customOverlayClass={customBackdropClassName}
        noOverlay={noBackdrop}
        targetElement={targetElement}>
        <div role="dialog" className={resolveClasses} onClick={e => closeOnOutsideClick && e.stopPropagation()} {...props}>
          {children}
        </div>
      </ModalBackDrop>
    </ModalContext.Provider>
  );
}