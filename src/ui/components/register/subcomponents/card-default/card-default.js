import React from "react";
import '../assets/styles/font.css';
import '../assets/styles/index.css';
export const Card = ({ className, ...restProps }) => {
  return <div className={`${className} common-card`} {...restProps}></div>;
};
