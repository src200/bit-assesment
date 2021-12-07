import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = {
  onClick: () => void;
  primary?: boolean;
  withIcon?: boolean;
  children: React.ReactNode;
};

export function Button({ primary, withIcon, children, onClick }: ButtonProps) {
  const resolveClasses = () =>
    classNames(styles.button, {
      [styles.primary]: primary,
      [styles.withIcon]: withIcon
    });

  return (
    <button className={resolveClasses()} onClick={onClick}>
      {children}
    </button>
  );
}
