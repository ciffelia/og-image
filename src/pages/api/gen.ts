import type { NextApiHandler, NextApiRequest } from 'next';
import { OG_IMAGE_PREVIEW_URL } from '@/utils/env';
import { FileType, FileTypeDefault } from '@/utils/schema';
import { takeScreenshot } from '@/utils/chromium';

const handler: NextApiHandler = async (req, res) => {
  const type = parseType(req);

  const url = buildPreviewUrl(req);
  const file = await takeScreenshot(url, type);

  res
    .status(200)
    .setHeader('Content-Type', `image/${type}`)
    // .setHeader(
    //   'Cache-Control',
    //   `public,immutable,no-transform,s-maxage=31536000,max-age=31536000`,
    // )
    .end(file);
};

const parseType = (req: NextApiRequest): FileType => {
  const parsedType = FileType.safeParse(req.query.type);
  if (parsedType.success) {
    return parsedType.data;
  } else {
    return FileTypeDefault;
  }
};

const buildPreviewUrl = (req: NextApiRequest): string => {
  const { searchParams } = new URL(req.url ?? '', 'https://dummy.example');
  return `${OG_IMAGE_PREVIEW_URL}?${searchParams.toString()}`;
};

export default handler;
