import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from "@storybook/addon-actions";

import { Singin } from '../Singin';

const data = {
  isLoading: true,
  errors: false,
};
storiesOf('Singin', module)
  .add('default', () => <Singin {...data} isLoading={false} />)
  .add('isLoading', () => <Singin {...data} />)
  .add('IsFormErrors', () => (
    <Singin {...data} isLoading={false} errors={true} />
  ));
