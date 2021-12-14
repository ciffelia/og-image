import React from 'react';
import { useMeasure } from 'react-use';
import { useAppSelector } from '@/redux/hooks';
import { Options, Theme } from '@/utils/schema';
import { imageHeight, imageWidth } from '@/utils/constants';
import Preview from '@/components/common/Preview';

const useOptions = (): Options => {
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

const HomePreview: React.VFC = () => {
  const options = useOptions();

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="w-full shadow rounded-md overflow-hidden pointer-events-none select-none"
      style={{
        aspectRatio: `${imageWidth} / ${imageHeight}`,
      }}
    >
      <div
        style={{
          transform: `scale(${width / imageWidth})`,
          transformOrigin: 'top left',
        }}
      >
        <Preview params={options} />
      </div>
    </div>
  );
};

export default HomePreview;
