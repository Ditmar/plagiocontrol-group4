import React from "react";
import "../../../styles/font.css";
import "../../../styles/index.css";
export const TextCommon = ({ className, ...restProps }) => {
  return <div className={`${className} common-text`} {...restProps}></div>;
};