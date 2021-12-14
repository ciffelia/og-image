import React from 'react';
import { FontFamilyDefault } from '@/utils/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setFontFamily } from '@/redux/input/inputSlice';

const FontFamilyInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.fontFamily);
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      placeholder={FontFamilyDefault}
      value={value}
      onChange={(e) => dispatch(setFontFamily(e.target.value))}
    />
  );
};

export default FontFamilyInput;
