import React from "react";
import "../styles/font.css";
export const Card = ({ className, ...restProps }) => {
  return <div className={`${className} common-card`} {...restProps}></div>;
};
