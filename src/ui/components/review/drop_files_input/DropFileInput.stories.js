import React from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";

import DropeFileInput  from "./DropFileInput";

const data = {
    
    isUploadedfile: false,
};

storiesOf('DropFileInput', module)
.add('default', () => <DropeFileInput {...data} isUploadedfile={false}/>)
.add('isUploadedfile', () => <DropeFileInput {...data} isUploadedfile={true}/>)
