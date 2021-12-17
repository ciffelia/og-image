import { useMemo } from 'react';
import { parseMarkdown } from '@/utils/browser/parseMarkdown';

export interface Props {
  markdown: string;
}

const Markdown: React.VFC<Props> = ({ markdown }) => {
  const html = useMemo(() => parseMarkdown(markdown), [markdown]);

  return (
    <div
      className="overflow-ellipsis overflow-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Markdown;
