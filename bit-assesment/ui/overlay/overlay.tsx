import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import styles from './overlay.module.scss';

export type OverlayProps = {
  /** flag to display the overlay */
  active: boolean;
  /** method to toggle overlay */
  onClick?: () => void;
  /** content to display in the overlay */
  children?: ReactNode;
  /** custom width to the overlay */
  width?: string;
  /** custom height to the overlay */
  height?: string;
  /** removes overlay */
  noOverlay?: boolean;
  /** custom overlay class */
  customOverlayClass?: string;
  /** target element to render overlay */
  targetElement?: HTMLElement;
};

export function Overlay({
  active,
  children,
  onClick,
  width = '100%',
  height = '100%',
  noOverlay = false,
  customOverlayClass,
  targetElement = document.body
}: OverlayProps) {
  const resolveClasses = classNames(styles.overlay, {
    [customOverlayClass]: customOverlayClass,
    [styles.noOverlay]: noOverlay
  });

  if (!active) return null;

  return createPortal(
    <div className={resolveClasses} onClick={onClick} style={{ width: width, height: height }}>
      {children}
    </div>,
    targetElement
  );
}
