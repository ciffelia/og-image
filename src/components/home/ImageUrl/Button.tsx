import React from 'react';

export interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.VFC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="w-full p-2 border border-gray-500 hover:bg-gray-100 active:bg-gray-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
