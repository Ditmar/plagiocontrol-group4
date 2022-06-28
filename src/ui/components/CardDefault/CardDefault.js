import React from "react";

export const CardDefault = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-card`} {...restProps}>
      {children}
    </div>
  );
};