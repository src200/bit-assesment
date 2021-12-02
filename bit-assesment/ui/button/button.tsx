import React, { useCallback } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = {
  onClick: () => void;
  primary?: boolean;
  children: React.ReactNode;
};

export function Button({ primary, children, onClick }: ButtonProps) {
  const resolveClasses = useCallback(
    () =>
      classNames(styles.button, {
        [styles.primary]: primary
      }), [primary],
  );

  return (
    <button className={resolveClasses()} onClick={onClick}>
      {children}
    </button>
  );
}
