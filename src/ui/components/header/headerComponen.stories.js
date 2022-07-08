import React from 'react';
import { storiesOf } from '@storybook/react';
import Head from './headerComponent';

const data = {
    
    file: false,
};

storiesOf('Head', module)
.add('Head', () => <Head {...data} file={false}/>)
