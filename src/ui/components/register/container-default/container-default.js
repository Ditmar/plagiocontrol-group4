import React from "react";
import "../styles/font.css";
import "../styles/index.css";
export const Container = ({ className, ...restProps }) => {
  return <div className={`${className} common-container`} {...restProps}></div>;
};
