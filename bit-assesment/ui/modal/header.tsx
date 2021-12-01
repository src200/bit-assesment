import React from 'react';
import styles from './modal.module.scss';

export type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <div className={styles.modalHeader}>
            <h4>{title}</h4>
        </div>
    );
}

Header.displayName = 'Modal.Header';