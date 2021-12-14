import { Options } from '@/utils/schema';
import PreviewBody from './PreviewBody';
import PreviewError from './PreviewError';

export interface Props {
  params: unknown;
}

const Preview: React.VFC<Props> = ({ params }) => {
  const parseOptionsResult = Options.safeParse(params);

  if (parseOptionsResult.success) {
    return <PreviewBody options={parseOptionsResult.data} />;
  } else {
    return <PreviewError message={parseOptionsResult.error.toString()} />;
  }
};

export default Preview;
