import React, { useEffect, useRef } from 'react';
import { ImageSizeDefault } from '@/utils/common/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setImageSize } from '@/redux/input/inputSlice';

const ImageSizeInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.imageSize);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (): void => {
    if (ref.current !== null) {
      dispatch(setImageSize(ref.current.value));
    }
  };

  useEffect(handleChange, [dispatch]);

  return (
    <input
      ref={ref}
      type="text"
      placeholder={ImageSizeDefault}
      value={value}
      onChange={handleChange}
    />
  );
};

export default ImageSizeInput;
