import React, { useState } from 'react';
import { Button } from '@src200/bit-assesment.ui.button';
import { Overlay } from './overlay';

export const BasicOverlay = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setToggle(true)}>Show Overlay</Button>
      <Overlay active={toggle} />
    </>
  );
}

export const ToggleOverlay = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setToggle(true)}>Toggle Overlay</Button>
      <Overlay active={toggle} onClick={() => setToggle(false)} />
    </>
  );
}

export const SidebarOverlay = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setToggle(true)}>Sidebar Overlay</Button>
      <Overlay active={toggle} onClick={() => setToggle(false)} width="30%" />
    </>
  );
}

export const NoOverlay = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setToggle(true)}>No Overlay</Button>
      <Overlay active={toggle} onClick={() => setToggle(false)} noOverlay={true} />
    </>
  );
}
