import React, { useEffect, useRef } from 'react';
import { FontSizeDefault } from '@/utils/common/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setFontSize } from '@/redux/input/inputSlice';

const FontSizeInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.fontSize);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (): void => {
    if (ref.current !== null) {
      dispatch(setFontSize(ref.current.value));
    }
  };

  useEffect(handleChange, [dispatch]);

  return (
    <input
      ref={ref}
      type="text"
      placeholder={FontSizeDefault}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FontSizeInput;
