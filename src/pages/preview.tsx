import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
      <Head>
        <title>Open Graph Image Preview</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <Preview params={params} />
      </main>
    </>
  );
};

export default PreviewPage;
