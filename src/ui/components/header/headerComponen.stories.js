import React from "react";
import { storiesOf } from "@storybook/react";
import {Head} from "./headerComponent";
export default {
    title: 'ui/components/header',
    component: Head
}

const Template = args => <Head {...args}/>
storiesOf('Head', module)
.add('Head', () => <Head {...args} />)
export const Header = Template();