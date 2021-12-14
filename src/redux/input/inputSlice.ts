import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ThemeDefault,
  FontFamilyDefault,
  FontSizeDefault,
  TextDefault,
  ImageSrcDefault,
  ImageSizeDefault,
} from '@/utils/common/schema';

export interface InputState {
  theme: string;
  fontFamily: string;
  fontSize: string;
  text: string;
  imageSrc: string;
  imageSize: string;
}

const initialState: InputState = {
  theme: ThemeDefault,
  fontFamily: FontFamilyDefault,
  fontSize: FontSizeDefault,
  text: TextDefault,
  imageSrc: ImageSrcDefault.join('\n'),
  imageSize: ImageSizeDefault,
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action: PayloadAction<string>) => {
      state.fontSize = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setImageSrc: (state, action: PayloadAction<string>) => {
      state.imageSrc = action.payload;
    },
    setImageSize: (state, action: PayloadAction<string>) => {
      state.imageSize = action.payload;
    },
  },
});

export const {
  setTheme,
  setFontFamily,
  setFontSize,
  setText,
  setImageSrc,
  setImageSize,
} = inputSlice.actions;

export default inputSlice.reducer;
