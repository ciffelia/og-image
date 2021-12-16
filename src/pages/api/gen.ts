import type { NextApiHandler, NextApiRequest } from 'next';
import { OG_IMAGE_PREVIEW_URL } from '@/utils/server/env';
import { takeScreenshot } from '@/utils/server/chromium';

const handler: NextApiHandler = async (req, res) => {
  const url = buildPreviewUrl(req);
  const file = await takeScreenshot(url);

  res
    .status(200)
    .setHeader('Content-Type', `image/png`)
    // .setHeader(
    //   'Cache-Control',
    //   `public,immutable,no-transform,s-maxage=31536000,max-age=31536000`,
    // )
    // @ts-expect-error: wrong type definition
    .end(file);
};

const buildPreviewUrl = (req: NextApiRequest): string => {
  const { searchParams } = new URL(req.url ?? '', 'https://dummy.example');
  return `${OG_IMAGE_PREVIEW_URL}?${searchParams.toString()}`;
};

export default handler;
