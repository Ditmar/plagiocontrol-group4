import React from 'react';
import { CardDocument } from './CardDocument';

export default {
    title: 'ui/components/CardDocument',
    component: CardDocument,
    
}

const Template = args => <CardDocument  {...args}/>
export const DefaultCard = Template.bind({});
DefaultCard.args = {
    name_Autor: 'Autor. Ing. Raul Gomez',
    title_Card: 'Análisis de la investigación sobre radio en Bolivia ...',
    number_Pages: '321 Pag.'
}
