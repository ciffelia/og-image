import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { Options } from '@/utils/common/schema';
import { imageHeight, imageWidth } from '@/utils/common/constants';
import ImageList from './ImageList';

const Markdown = dynamic(async () => await import('./Markdown'));

export interface Props {
  options: Options;
}

const PreviewBody: React.VFC<Props> = ({ options }) => {
  const radialColor = options.theme === 'light' ? 'lightgray' : 'dimgray';

  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-center p-16 gap-16',
        {
          'bg-neutral-50 text-neutral-900': options.theme === 'light',
          'bg-neutral-900 text-neutral-50': options.theme === 'dark',
        },
      )}
      style={{
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
        fontFamily: options.fontFamily,
        backgroundImage: `radial-gradient(circle at 15px 15px, ${radialColor} 2%, transparent 0%), radial-gradient(circle at 45px 45px, ${radialColor} 2%, transparent 0%)`,
        backgroundSize: '60px 60px',
      }}
    >
      <ImageList imageSrc={options.imageSrc} size={options.imageSize} />

      <div
        className="max-w-full text-center"
        style={{ fontSize: options.fontSize }}
      >
        <Markdown markdown={options.text} />
      </div>
    </div>
  );
};

export default PreviewBody;
