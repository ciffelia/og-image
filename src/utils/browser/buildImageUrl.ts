import { Options } from '@/utils/common/schema';
import { buildUrlSearchParams } from '@/utils/browser/buildUrlSearchParams';

export const buildImageUrl = (options: Options): string | undefined => {
  if (typeof location === 'undefined') {
    return undefined;
  }

  const searchParams = buildUrlSearchParams(options);
  const url = new URL(`/api/gen?${searchParams.toString()}`, location.href);

  return url.toString();
};
