import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from "@storybook/addon-actions";

import { Register } from '../Register';

const data = {
  isLoading: true,
  label: 'Sing in',
  errors: false,
};
storiesOf('Register', module)
  .add('default', () => <Register {...data} isLoading={false} />)
  .add('isLoading', () => <Register {...data} />)
  .add('IsFormErrors', () => (
    <Register {...data} isLoading={false} errors={true} />
  ));
