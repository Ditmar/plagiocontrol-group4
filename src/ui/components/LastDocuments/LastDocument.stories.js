import React from 'react';
import {LastDocument} from './LastDocument';
export default {
  title: './LastDocument',
  component: LastDocument,
};

const Template = (args) => <LastDocument {...args} />;
export const DefaultButton = Template.bind({});