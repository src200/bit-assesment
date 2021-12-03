import React, { ReactNode } from 'react';
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
};

export function Overlay({ active, children, onClick, width = '100vw', height = '100vh' }: OverlayProps) {
  return (
    active && (
      <div className={styles.overlay} onClick={onClick} style={{ width: width, height: height }}>
        {children}
      </div>
    )
  );
}
