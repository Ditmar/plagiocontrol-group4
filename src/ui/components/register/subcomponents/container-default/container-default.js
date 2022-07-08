import React from 'react';
import '../assets/styles/font.css';
import '../assets/styles/index.css';
export const Container = ({ className, ...restProps }) => {
  return <div className={`${className} common-container`} {...restProps}></div>;
};
