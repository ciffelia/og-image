import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import FontHead from '@/components/common/FontHead';
import Preview from '@/components/common/Preview';

const useParameters = (): unknown => {
  const { query } = useRouter();

  // shallow clone
  const clonedQuery = {
    ...query,
  };

  // make sure that imageSrc is an array
  if (typeof query.imageSrc === 'string') {
    clonedQuery.imageSrc = [query.imageSrc];
  }

  return clonedQuery;
};

const PreviewPage: NextPage = () => {
  const params = useParameters();

  return (
    <>
      <FontHead />
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className="w-screen h-screen">
        <Preview params={params} />
      </main>
    </>
  );
};

export default PreviewPage;
