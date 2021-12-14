import React, { ChangeEventHandler, useEffect, useRef } from 'react';
import { ImageSrcDefault } from '@/utils/schema';
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
  useEffect(() => {
    if (ref.current !== null) {
      updateTextareaHeight(ref.current);
    }
  }, [ref]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    updateTextareaHeight(e.target);
    dispatch(setImageSrc(e.target.value));
  };

  return (
    <textarea
      placeholder={ImageSrcDefault.join('\n')}
      value={value}
      ref={ref}
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
