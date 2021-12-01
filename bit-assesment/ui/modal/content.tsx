import React, { ReactNode } from 'react';
import styles from './modal.module.scss';

export type ContentProps = {
    children?: ReactNode;
};

export default function Content({ children }: ContentProps) {
    return (
        <div className={styles.modalContent}>
            {children}
        </div>
    );
}

Content.displayName = 'Modal.Content';