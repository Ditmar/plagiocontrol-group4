import React from 'react';
import {Cards} from './Cards';
export default {
  title: './Cards',
  component: Cards,
  //argTypes: { handleClick: {action: 'handleClick'}}
};

const Template = (args) => <Cards {...args} />;
export const DefaultButton = Template.bind({});