import React from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
