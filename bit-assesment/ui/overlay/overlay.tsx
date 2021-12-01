import React, { ReactNode } from 'react';
import styles from './overlay.module.scss';

export type OverlayProps = {
  active: boolean;
  onClick?: () => void;
  children?: ReactNode;
  width?: string;
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
