import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Options } from '@/utils/schema';
import PreviewHead from '@/components/preview/PreviewHead';
import ImageList from '@/components/preview/ImageList';

const Preview: NextPage = () => {
  const router = useRouter();

  const parsedQuery = Options.safeParse(router.query);
  if (!parsedQuery.success) {
    return <PreviewHead />;
  }

  const options = parsedQuery.data;
  const radialColor = options.theme === 'light' ? 'lightgray' : 'dimgray';
  const imageSrc = Array.isArray(options.imageSrc)
    ? options.imageSrc
    : [options.imageSrc];

  return (
    <>
      <PreviewHead />
      <main
        className={classNames(
          'w-screen h-screen flex flex-col justify-center items-center gap-16',
          {
            'bg-neutral-50 text-neutral-900': options.theme === 'light',
            'bg-neutral-900 text-neutral-50': options.theme === 'dark',
          },
        )}
        style={{
          fontFamily: options.fontFamily,
          backgroundImage: `radial-gradient(circle at 15px 15px, ${radialColor} 2%, transparent 0%), radial-gradient(circle at 45px 45px, ${radialColor} 2%, transparent 0%)`,
          backgroundSize: '60px 60px',
        }}
      >
        <ImageList imageSrc={imageSrc} size={options.imageSize} />
        <p style={{ fontSize: options.fontSize }}>{options.text}</p>
      </main>
    </>
  );
};

export default Preview;
