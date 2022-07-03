import React from "react";

import { Login } from "./Login";

export default {
    title:'ui/login-Proyect',
    component: Login
}
 
const Template = args => <Login  {...args}/>


export  const Log = Template.bind({});
    Log.args = {
    label: 'Log In',
    isloading:'isloading',
    errors:false
}

export  const Error = Template.bind({});
    Error.args = {
    label: 'Log In',
    isloading:'isloading',
    errors:true
}

