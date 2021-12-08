import React, { ReactNode } from 'react';
import styles from './content.module.scss';

export type ContentProps = {
  children?: ReactNode;
};

export function Content({ children }: ContentProps) {
  return (
    <div className={styles.modalContent}>
      {children}
    </div>
  );
}