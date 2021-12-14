import React from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setTheme } from '@/redux/input/inputSlice';

const ThemeSelect: React.VFC = () => {
  const value = useAppSelector((state) => state.input.theme);
  const dispatch = useAppDispatch();

  return (
    <select value={value} onChange={(e) => dispatch(setTheme(e.target.value))}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ThemeSelect;
