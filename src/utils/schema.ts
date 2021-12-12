/* eslint-disable @typescript-eslint/no-redeclare */

import { z } from 'zod';

export const FileTypeDefault = 'png';
export const FileType = z.enum(['jpeg', 'png']).default(FileTypeDefault);
export type FileType = z.infer<typeof FileType>;

export const ThemeDefault = 'light';
export const Theme = z.enum(['light', 'dark']).default(ThemeDefault);
export type Theme = z.infer<typeof Theme>;

export const FontFamilyDefault = '"Roboto Mono", "Noto Sans JP", monospace';
export const FontFamily = z.string().default(FontFamilyDefault);
export type FontFamily = z.infer<typeof FontFamily>;

export const FontSizeDefault = '60px';
export const FontSize = z.string().default(FontSizeDefault);
export type FontSize = z.infer<typeof FontSize>;

export const TextDefault = '';
export const Text = z.string().default(TextDefault);
export type Text = z.infer<typeof Text>;

export const ImageSrcDefault = [];
export const ImageSrc = z
  .union([z.string(), z.array(z.string())])
  .default(ImageSrcDefault);
export type ImageSrc = z.infer<typeof ImageSrc>;

export const ImageSizeDefault = '125px';
export const ImageSize = z.string().default(ImageSizeDefault);
export type ImageSize = z.infer<typeof ImageSize>;

export const Options = z.object({
  type: FileType,
  theme: Theme,
  fontFamily: FontFamily,
  fontSize: FontSize,
  text: Text,
  imageSrc: ImageSrc,
  imageSize: ImageSize,
});
export type Options = z.infer<typeof Options>;
