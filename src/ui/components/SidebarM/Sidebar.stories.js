import React from "react";
import { Sidebar } from "./Sidebar";

export default {
    title: 'iu/components/Sidebar',
    component: Sidebar

}
const Template = (args) => <Sidebar {...args}/>;
 export const sidebar = Template.bind({});
 sidebar.args ={
    tittle:''
 };
