import React from 'react';
import { ImageSizeDefault } from '@/utils/common/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setImageSize } from '@/redux/input/inputSlice';

const ImageSizeInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.imageSize);
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      placeholder={ImageSizeDefault}
      value={value}
      onChange={(e) => dispatch(setImageSize(e.target.value))}
    />
  );
};

export default ImageSizeInput;
