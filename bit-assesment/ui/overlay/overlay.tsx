import React from 'react';

export type OverlayProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Overlay({ text }: OverlayProps) {
  return (
    <div>
      {text}
    </div>
  );
}
