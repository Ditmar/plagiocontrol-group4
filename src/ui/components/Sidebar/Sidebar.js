import React from "react";
import './Sidebar.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Logo from "./img/logo";
import vec1 from "./img/vec1.svg";
import vec2 from "./img/vec2.svg";
import vec3 from "./img/vec3.svg";
import vec4 from "./img/vec4.svg";
import vec5 from "./img/vec5.svg";
import vec6 from "./img/vec6.svg";
import vec7 from "./img/vec7.svg";
import { string } from "prop-types";

export const Sidebar = ({tittle}) => {
    let tam = 
    setInterval(()=>{
        if(window.innerWidth<720){
           tam = false;
        }
        else {
            tam = true; 
        }
    },1000)

    return(
        <div>
        {tam?(<div className="sidebar"> 
     <div className="logo">
           <Logo/>
           </div>
           <div className="tittle">
           {tittle || 'Plagio Control'}
           </div>
            
        <ul className="menu">
            <li>
                <img src={vec1}></img>
                <a>Inicio</a>
            </li>
            <li>
                <img src={vec2}></img>
                <a>Trabajo</a>
            </li>
            <li>
                <img src={vec3}></img>
                <a>Revisar Tesis</a>
            </li>
            <li>
                <img src={vec4}></img>
                <a>Listar Tesis</a>
            </li>
            <li>
                <img src={vec5}></img>
                <a>Publicar Tesis</a>
            </li>
            <li>
                <img src={vec6}></img>
                <a>Reportes Generales</a>
            </li>
            <div className="divider"/>
            <li className="settings">
                <img src={vec7}></img>
                <a>Settings</a>
            </li>
        </ul>
            
    </div>):(<div>hola</div>)}
    </div>
    )
}

