import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Options } from '@/utils/schema';
import PreviewHead from '@/components/preview/PreviewHead';
import PreviewBody from '@/components/preview/PreviewBody';
import PreviewError from '@/components/preview/PreviewError';

const Preview: NextPage = () => {
  const router = useRouter();

  // shallow clone
  const query = {
    ...router.query,
  };
  // make sure that imageSrc is an array
  if (typeof query.imageSrc === 'string') {
    query.imageSrc = [query.imageSrc];
  }

  const parsedQuery = Options.safeParse(query);

  if (parsedQuery.success) {
    return (
      <>
        <PreviewHead />
        <PreviewBody options={parsedQuery.data} />
      </>
    );
  } else {
    return (
      <>
        <PreviewHead />
        <PreviewError message={parsedQuery.error.toString()} />
      </>
    );
  }
};

export default Preview;
