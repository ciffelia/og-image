import React from 'react';

export interface Props {
  text: string;
  children: React.ReactNode;
}

const Label: React.VFC<Props> = ({ text, children }) => (
  <label className="flex flex-col gap-1">
    <span>{text}</span>
    {children}
  </label>
);

export default Label;
