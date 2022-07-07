import React from "react";
import { useState } from "react";
import './Sidebar.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
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
import { ListDocs } from "../../../context/listDocs/ListDocs";
import { Works } from "../../../context/Works/Works";
import { Home } from "../../../context/Home/Home";
import { Review } from "../../../context/Review/Review";
import { BurguerButton } from "./components/BurguerButton";

export const Sidebar = ({tittle}) => {
    const [clicked, setClicked]=useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return(
        <>
        <div className="burguer" >
            <BurguerButton/>
        </div>      
    <div className="sidebar"> 
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
    </div>
    </>
 
   
    )
}
