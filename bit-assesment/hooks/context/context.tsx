import { createContext } from 'react';
import { ModalProps } from '@src200/bit-assesment.ui.modal';

export const ModalContext = createContext<ModalProps>({
  isOpen: false,
  onClose: () => { },
});