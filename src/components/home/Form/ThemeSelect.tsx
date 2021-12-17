import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setTheme } from '@/redux/input/inputSlice';

const ThemeSelect: React.VFC = () => {
  const value = useAppSelector((state) => state.input.theme);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLSelectElement>(null);
  const handleChange = (): void => {
    if (ref.current !== null) {
      dispatch(setTheme(ref.current.value));
    }
  };

  useEffect(handleChange, [dispatch]);

  return (
    <select ref={ref} value={value} onChange={handleChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ThemeSelect;
