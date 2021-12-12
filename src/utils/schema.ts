/* eslint-disable @typescript-eslint/no-redeclare */

import { z } from 'zod';

export const FileType = z.enum(['jpeg', 'png']);
export type FileType = z.infer<typeof FileType>;

export const Options = z.object({
  type: FileType,
});
export type Options = z.infer<typeof Options>;
