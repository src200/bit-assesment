import React, { ReactNode } from 'react';
import styles from './actions.module.scss';

export type ActionsProps = {
  children?: ReactNode;
};

export function Actions({ children }: ActionsProps) {
  return (
    <div className={styles.modalActions}>
      {children}
    </div>
  );
}