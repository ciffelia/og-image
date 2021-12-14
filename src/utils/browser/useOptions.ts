import { Options, Theme } from '@/utils/common/schema';
import { useAppSelector } from '@/redux/hooks';

export const useOptions = (): Options => {
  const input = useAppSelector((state) => state.input);

  return {
    ...input,
    theme: input.theme as Theme,
    imageSrc: input.imageSrc
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0),
  };
};
