import { React } from "react";
import '../header/header.css';
import { Perfil } from './Perfil';
export const Head = () => {
    const Usuario= {
        Perfil:'Jones Ferdinand',
        Avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/CARLOS-WARD-PERFIL.png',
    };
    return (
        <div className="head">
            <p className="first">Overview</p>
            <div>
                <input className="search" Type="Text"/>
                <input className="Bsearch" type="button"/>
                <input className="notifi" type="button"/>
                <Perfil Usuario={Usuario}/>
            </div>
        </div>
    );
}