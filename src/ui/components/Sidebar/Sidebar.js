import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import Logo from "./img/logo";
import vec1 from "./img/vec1.svg";
import vec2 from "./img/vec2.svg";
import vec3 from "./img/vec3.svg";
import vec4 from "./img/vec4.svg";
import vec5 from "./img/vec5.svg";
import vec6 from "./img/vec6.svg";
import vec7 from "./img/vec7.svg";
// import { BurguerButton } from "./components/BurguerButton";
import bar from "./img/bar.jpeg";
import { BurguerButton } from "./components/BurguerButton";

export const Sidebar = ({tittle}) => {

        
    

 const [clicked, setClicked]=useState(false);
 const handleClick=()=>{
    setClicked(!clicked);
 }   
//  console.log(burguer);
//  if(burguer===true){
//     console.log("hola");
//  }

    return(
        <>   
    <NavContainer> 
            <div className="burguer">
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`sidebar ${clicked ? 'active' : ''}`}>
                <div className="logo">
                    <Logo/>
                </div>
                <div className="tittle">  
                        {tittle || 'Plagio Control'}
                </div>
                
                <ul className="menu">
                    <li>
                        <img src={vec1}></img>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <img src={vec2}></img>
                        <a href="/works">Trabajo</a>
                    </li>
                    <li>
                        <img src={vec3}></img>
                        <a href="/review">Revisar Tesis</a>
                    </li>
                    <li>
                        <img src={vec4}></img>
                        <a href="/list-docs">Listar Tesis</a>
                    </li>
                    <li>
                        <img src={vec5}></img>
                        <a href="/register">Publicar Tesis</a>
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
    </NavContainer>
    </>
 
    )
}
const NavContainer = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;1,200&display=swap');
.burguer{
    @media(min-width: 768px){
        display:none;
    }  
}
    .sidebar{
        position: absolute;
        top: -700px;
        left: -200;
        background-color: black;
        
 
        .logo{
            position: absolute;
            width: 8.375rem;
            height: 1.5rem;
            left: 0rem;
            top: 2.313rem; 
        }
    
        .tittle{
            position: relative;
            width: 8,125rem;
            height: 1.5px;
            left: 1.7rem;
            top: 2.563rem; 
            color: #A4A6B3;
            font-family: 'Mulish';  
            size: 19px;  
        }
       
        .menu{
            position: absolute;
            top: 8rem;
            list-style: none;
    
            li{
                width: 15.938rem;
                height: 3.5rem;
            
                img{
                    position: absolute;
                    left: 2rem;
                    margin-top: 1.125rem;
                }
    
                a{
                    text-decoration: none;
                    position: absolute;
                    height: 1.25rem;
                    left: 4.5rem;
                    right: 1.5rem;
                    color: #DDE2FF;
                    opacity: 0.6;
                    margin-top: 1.125rem;
                    font-family: 'Mulish';
                }
            }
        }
        .divider{
            position: absolute;
            width: 15.938rem;
            height: 0.063rem;
            background-color: #A4A6B3;
        }
        .settings{
            position: absolute;
            top: 23rem;
        }
        li:hover{
            background-color: #3e4049;   
        }
        a:hover{
            opacity: 1;
        }

        @media(min-width: 768px)
        {
        width: 15.938rem;
        height: 100%;
        display: block;
        position: absolute;
        margin-left: 4px;
        top: 4%;
        left: 0;
        right: 0;   
        text-align: center;
        background-color: #363740;
        }
        

    }
    .sidebar.active{
        width: 15.938rem;
        height: 100%;
        display: block;
        position: absolute;
        margin-left: 5px;
        margin-right: auto;
        top: 10%;
        left: 0;
        right: 0;
        text-align: center;   
        background-color: #363740;
   
    }
    @media(min-width: 768px)
    {
        display: block;
       
    }
`;