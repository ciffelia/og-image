/* eslint-disable @typescript-eslint/no-redeclare */

import { z } from 'zod';

export const ThemeDefault = 'light';
export const Theme = z.enum(['light', 'dark']).default(ThemeDefault);
export type Theme = z.infer<typeof Theme>;

export const FontFamilyDefault = '"Roboto Mono", "Noto Sans JP", monospace';
export const FontFamily = z.string().default(FontFamilyDefault);
export type FontFamily = z.infer<typeof FontFamily>;

export const FontSizeDefault = '60px';
export const FontSize = z.string().default(FontSizeDefault);
export type FontSize = z.infer<typeof FontSize>;

export const TextDefault = 'Hello, world!';
export const Text = z.string().default(TextDefault);
export type Text = z.infer<typeof Text>;

export const ImageSrcDefault = [
  'https://icon.ciffelia.com/?rounded=true&format=webp',
];
export const ImageSrc = z
  .union([z.string(), z.array(z.string())])
  .default(ImageSrcDefault);
export type ImageSrc = z.infer<typeof ImageSrc>;

export const ImageSizeDefault = '150px';
export const ImageSize = z.string().default(ImageSizeDefault);
export type ImageSize = z.infer<typeof ImageSize>;

export const Options = z.object({
  theme: Theme,
  fontFamily: FontFamily,
  fontSize: FontSize,
  text: Text,
  imageSrc: ImageSrc,
  imageSize: ImageSize,
});
export type Options = z.infer<typeof Options>;
