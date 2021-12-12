import { Options } from './schema';

const { OG_IMAGE_PREVIEW_URL } = process.env;
if (typeof OG_IMAGE_PREVIEW_URL === 'undefined') {
  throw new Error('OG_IMAGE_PREVIEW_URL must be set');
}

export const buildUrl = (req: Options): string => {
  const url = new URL(OG_IMAGE_PREVIEW_URL);

  for (const [key, value] of Object.entries(req)) {
    url.searchParams.set(key, value);
  }

  return url.toString();
};
