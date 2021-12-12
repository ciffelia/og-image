import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Options } from '@/utils/schema';

const PreviewHead: React.VFC = () => (
  <Head>
    <meta name="robots" content="noindex,nofollow" />
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      crossOrigin="anonymous"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700"
      rel="stylesheet"
      crossOrigin="anonymous"
    />
  </Head>
);

const Preview: NextPage = () => {
  const router = useRouter();

  const parsedQuery = Options.safeParse(router.query);
  if (!parsedQuery.success) {
    return <PreviewHead />;
  }

  const options = parsedQuery.data;
  const radialColor = options.theme === 'light' ? 'lightgray' : 'dimgray';

  return (
    <>
      <PreviewHead />
      <main
        className={classNames(
          'w-screen h-screen flex flex-col justify-center items-center gap-10',
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
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>
    </>
  );
};

export default Preview;
