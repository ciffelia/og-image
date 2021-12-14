import React from 'react';
import { useMeasure } from 'react-use';
import { useOptions } from '@/utils/browser/useOptions';
import { imageHeight, imageWidth } from '@/utils/common/constants';
import Preview from '@/components/common/Preview';

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
