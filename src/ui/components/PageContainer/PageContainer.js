import React from "react";
import "../../../styles/index.css"
export const PageContainer = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-container`} {...restProps}>
      {children}
    </div>
  );
};