import React from "react";
import "../styles/font.css";
import "../styles/index.css";
export const Text = ({ ...restProps }) => {
  return <div className={`common-text-default`} {...restProps}></div>;
};
