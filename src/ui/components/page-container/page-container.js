import React from "react";
import "../../../styles/index.css";
export const PageContainer = ({ className, ...restProps }) => {
  return <div className={`${className} common-container`} {...restProps}></div>;
};
