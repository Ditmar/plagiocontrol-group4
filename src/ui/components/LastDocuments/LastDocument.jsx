import React from 'react'
import './LastDocument.css';
import { ItemDocument } from './ItemDocument';
const LastDocument = () => {
    return (
        <div className='container'>
            <section className='container-header'>
                <p className='header' >Ultimos Docunmentos Publicados</p>
                <p className='paragraph'><span>Group:</span> <b>Support</b></p>
            </section>
            {
                ItemDocument.pages.map(item => (
                    <div className='container-content'>
                        <p className='content-head'>{item.titulo}</p>
                        <section className='content'>
                            <p className='links'>View Details</p>
                            <span className='page'>{item.pag}</span>
                        </section>
                    </div>
                    )
                 )
            },
        </div>
    )
}
export default LastDocument