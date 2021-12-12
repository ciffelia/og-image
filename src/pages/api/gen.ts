import type { NextApiHandler } from 'next';
import { Options } from '@/utils/schema';
import { takeScreenshot } from '@/utils/chromium';
import { buildUrl } from '@/utils/preview';

const handler: NextApiHandler = async (request, response) => {
  const parsedQuery = Options.safeParse(request.query);
  if (!parsedQuery.success) {
    return response.status(400).json(parsedQuery.error);
  }
  const options = parsedQuery.data;

  const url = buildUrl(options);
  const file = await takeScreenshot(url, options.type);

  response
    .status(200)
    .setHeader('Content-Type', `image/${options.type}`)
    // .setHeader(
    //   'Cache-Control',
    //   `public,immutable,no-transform,s-maxage=31536000,max-age=31536000`,
    // )
    .end(file);
};

export default handler;
