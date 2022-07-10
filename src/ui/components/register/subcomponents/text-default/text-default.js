import React from 'react';
import '../assets/styles/font.css';
import '../assets/styles/index.css';
export const Text = ({ ...restProps }) => {
  return <div className={`common-text-default`} {...restProps}></div>;
};
