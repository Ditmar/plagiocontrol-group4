import React from 'react';
import {Cards} from './Cards';
export default {
  title: './Cards',
  component: Cards,
};
const Template = (args) => <Cards {...args} />;
export const DefaultButton = Template.bind({});