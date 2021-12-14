import classNames from 'classnames';
import { Options } from '@/utils/schema';
import { imageHeight, imageWidth } from '@/utils/constants';
import { parseMarkdown } from '@/utils/parseMarkdown';
import ImageList from './ImageList';

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
      <p
        className="max-w-full text-center overflow-ellipsis overflow-hidden"
        style={{ fontSize: options.fontSize }}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(options.text) }}
      />
    </div>
  );
};

export default PreviewBody;
