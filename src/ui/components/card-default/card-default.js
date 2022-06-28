import React from "react";

export const CardDefault = ({ className, ...restProps }) => {
  return <div className={`${className} common-card`} {...restProps}></div>;
};
