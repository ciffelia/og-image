/* eslint-disable @typescript-eslint/no-redeclare */

import { z } from 'zod';

export const FileType = z.enum(['jpeg', 'png']);
export type FileType = z.infer<typeof FileType>;

export const ThemeDefault = 'light';
export const Theme = z.enum(['light', 'dark']).default(ThemeDefault);
export type Theme = z.infer<typeof Theme>;

export const FontFamilyDefault = '"Roboto Mono", "Noto Sans JP", monospace';
export const FontFamily = z.string().default(FontFamilyDefault);
export type FontFamily = z.infer<typeof FontFamily>;

export const Options = z.object({
  type: FileType,
  theme: Theme,
  fontFamily: FontFamily,
});
export type Options = z.infer<typeof Options>;
