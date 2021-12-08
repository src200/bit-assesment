import React from 'react';
import { Actions } from './actions';
import { Button } from '@src200/bit-assesment.ui.button';

export const BasicActions = () => (
  <Actions>
    <Button onClick={void 0}>Cancel</Button>
    <Button primary onClick={void 0}>Confirm</Button>
  </Actions>
);
