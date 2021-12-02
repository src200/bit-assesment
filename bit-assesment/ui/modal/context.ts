import { createContext } from 'react';
import { ModalProps } from '.';

export const ModalContext = createContext<ModalProps>({
    isOpen: false,
    onClose: () => { },
});