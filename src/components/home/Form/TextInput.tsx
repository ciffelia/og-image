import React, { useEffect, useRef } from 'react';
import { TextDefault } from '@/utils/common/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setText } from '@/redux/input/inputSlice';

const TextInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.text);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (): void => {
    if (ref.current !== null) {
      dispatch(setText(ref.current.value));
    }
  };

  useEffect(handleChange, [dispatch]);

  return (
    <input
      ref={ref}
      type="text"
      placeholder={TextDefault}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextInput;
