import React from 'react';
import { TextDefault } from '@/utils/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setText } from '@/redux/input/inputSlice';

const TextInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.text);
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      placeholder={TextDefault}
      value={value}
      onChange={(e) => dispatch(setText(e.target.value))}
    />
  );
};

export default TextInput;
