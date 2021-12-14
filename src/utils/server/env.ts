if (typeof process.env.OG_IMAGE_PREVIEW_URL === 'undefined') {
  throw new Error('OG_IMAGE_PREVIEW_URL must be set');
}
export const OG_IMAGE_PREVIEW_URL = process.env.OG_IMAGE_PREVIEW_URL;
