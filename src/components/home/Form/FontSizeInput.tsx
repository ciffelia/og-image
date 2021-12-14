import React from 'react';
import { FontSizeDefault } from '@/utils/common/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setFontSize } from '@/redux/input/inputSlice';

const FontSizeInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.fontSize);
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      placeholder={FontSizeDefault}
      value={value}
      onChange={(e) => dispatch(setFontSize(e.target.value))}
    />
  );
};

export default FontSizeInput;
