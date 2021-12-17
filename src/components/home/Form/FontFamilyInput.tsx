import React, { useEffect, useRef } from 'react';
import { FontFamilyDefault } from '@/utils/common/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setFontFamily } from '@/redux/input/inputSlice';

const FontFamilyInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.fontFamily);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (): void => {
    if (ref.current !== null) {
      dispatch(setFontFamily(ref.current.value));
    }
  };

  useEffect(handleChange, [dispatch]);

  return (
    <input
      ref={ref}
      type="text"
      placeholder={FontFamilyDefault}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FontFamilyInput;
