import type { NextApiHandler } from 'next';
import { Request } from '@/utils/schema';
import { takeScreenshot } from '@/utils/chromium';

const handler: NextApiHandler = async (request, response) => {
  const parsedBody = Request.safeParse(request.query);
  if (!parsedBody.success) {
    return response.status(400).send('Invalid request');
  }

  const req = parsedBody.data;

  const html = 'hello world!';
  const file = await takeScreenshot(html, req.type);

  response
    .status(200)
    .setHeader('Content-Type', `image/${req.type}`)
    .setHeader(
      'Cache-Control',
      `public,immutable,no-transform,s-maxage=31536000,max-age=31536000`,
    )
    .end(file);
};

export default handler;
