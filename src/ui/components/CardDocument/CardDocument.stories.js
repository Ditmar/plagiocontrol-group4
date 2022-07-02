import React from "react";
import { CardDocument } from "./CardDocument";
export default {
    title: 'ui/components/CardDocument',
    component: CardDocument,
    //argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <CardDocument  {...args}/>
export const DefaultButton = Template.bind({});