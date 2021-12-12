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

  return (
    <>
      <PreviewHead />
      <main
        className={classNames(
          'w-screen h-screen flex flex-col justify-center items-center gap-10',
          {
            'bg-slate-50 text-slate-900': options.theme === 'light',
            'bg-slate-900 text-slate-50': options.theme === 'dark',
          },
        )}
        style={{
          fontFamily: options.fontFamily,
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
