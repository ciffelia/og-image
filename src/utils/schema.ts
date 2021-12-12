/* eslint-disable @typescript-eslint/no-redeclare */

import { z } from 'zod';

export const FileType = z.enum(['jpeg', 'png']);
export type FileType = z.infer<typeof FileType>;

export const Request = z.object({
  type: FileType,
});
export type Request = z.infer<typeof Request>;
