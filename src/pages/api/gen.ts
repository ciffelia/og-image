import type { NextApiHandler, NextApiRequest } from 'next';
import ipaddr from 'ipaddr.js';
import { takeScreenshot } from '@/utils/server/chromium';

const handler: NextApiHandler = async (req, res) => {
  const url = buildPreviewUrl(req);
  const file = await takeScreenshot(url);

  res
    .status(200)
    .setHeader('Content-Type', 'image/png')
    .setHeader(
      'Cache-Control',
      `public,immutable,no-transform,s-maxage=31536000,max-age=31536000`,
    )
    .end(file);
};

const buildPreviewUrl = (req: NextApiRequest): string => {
  const host = getHost(req);
  const { searchParams } = new URL(req.url ?? '', 'https://dummy.example');

  return `http://${host}/preview?${searchParams.toString()}`;
};

const getHost = (req: NextApiRequest): string => {
  if (process.env.VERCEL_URL !== undefined) {
    return process.env.VERCEL_URL;
  }

  if (req.headers.host !== undefined) {
    return req.headers.host;
  }

  const { localAddress, localPort } = req.socket;

  if (ipaddr.parse(localAddress).kind() === 'ipv6') {
    return `[${localAddress}]:${localPort}`;
  } else {
    return `${localAddress}:${localPort}`;
  }
};

export default handler;
