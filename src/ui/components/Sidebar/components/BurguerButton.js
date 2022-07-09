import React from "react";
import styled from 'styled-components';
export const BurguerButton = (props) => {
    return(
        <Burguer>
            <div onClick={props.handleClick} 
            class={`icon nav-icon-5 ${props.clicked ? 'open' : 'icon'}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </Burguer>
    )
}
const Burguer = styled.div`
.nav-icon-5{
    width: 30px;
    height: 26px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    background-color:black;
  }
  .nav-icon-5 span{
    background-color:#fff;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:95%;
    height: 3.5px;
    transition-duration: 500ms;
    left: 1px;
  }
  .nav-icon-5 span:nth-child(1){
    top:3px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2){
    top:10.5px;
    left: 0px;
    opacity:1;
  }
  .nav-icon-5 span:nth-child(3){
    bottom:3.5px;
    left: 0px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1){
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2){
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3){
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1){
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon-5.open span:nth-child(2){
    opacity:0;
  }
  .nav-icon-5.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 13px;
  }
`