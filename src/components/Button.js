import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        guardianblue
        hover:bg-white
        hover:border-black
        hover:text-guardianbluetext
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
