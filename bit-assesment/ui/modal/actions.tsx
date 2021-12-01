import React, { ReactNode } from 'react';
import styles from './modal.module.scss';

export type ActionProps = {
    children?: ReactNode;
};

export default function Actions({ children }: ActionProps) {
    return (
        <div className={styles.modalActions}>
            {children}
        </div>
    );
}

Actions.displayName = 'Modal.Actions';