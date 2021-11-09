import { VercelRequest, VercelResponse } from '@vercel/node';
import { parseRequest } from './_lib/parser';
import { getScreenshot } from './_lib/chromium';
import { getHtml } from './_lib/template';

const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handler(
    req: VercelRequest,
    res: VercelResponse,
): Promise<void> {
    const parsedReq = parseRequest(req);
    const { fileType } = parsedReq;

    const html = getHtml(parsedReq);
    if (isHtmlDebug) {
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
        return;
    }

    const file = await getScreenshot(html, fileType);

    res.status(200);
    res.setHeader('Content-Type', `image/${fileType}`);
    res.setHeader(
        'Cache-Control',
        `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
    );
    res.end(file);
}
