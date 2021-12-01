import React from 'react';

export type ModalProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Modal({ text }: ModalProps) {
  return (
    <div>
      {text}
    </div>
  );
}
