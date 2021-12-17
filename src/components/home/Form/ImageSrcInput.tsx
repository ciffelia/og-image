import React, { useEffect, useRef } from 'react';
import { ImageSrcDefault } from '@/utils/common/schema';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setImageSrc } from '@/redux/input/inputSlice';

const updateTextareaHeight = (elm: HTMLTextAreaElement): void => {
  // hack: https://stackoverflow.com/a/25621277
  elm.style.height = 'auto';
  elm.style.height = `${elm.scrollHeight}px`;
};

const ImageSrcInput: React.VFC = () => {
  const value = useAppSelector((state) => state.input.imageSrc);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLTextAreaElement>(null);
  const handleChange = (): void => {
    if (ref.current !== null) {
      updateTextareaHeight(ref.current);
      dispatch(setImageSrc(ref.current.value));
    }
  };

  useEffect(handleChange, [dispatch]);

  return (
    <textarea
      ref={ref}
      placeholder={ImageSrcDefault.join('\n')}
      value={value}
      onChange={handleChange}
      style={{
        resize: 'none',
        overflowY: 'hidden',
        paddingBottom: '0.75rem',
      }}
    />
  );
};

export default ImageSrcInput;
