import url from 'url';
import { VercelRequest } from '@vercel/node';
import { ParsedRequest, Theme } from './types';

export function parseRequest(req: VercelRequest): ParsedRequest {
    // eslint-disable-next-line node/no-deprecated-api
    const { pathname } = url.parse(req.url ?? '/');
    const { fontSize, images, widths, heights, theme, md } = req.query;

    if (Array.isArray(fontSize)) {
        throw new Error('Expected a single fontSize');
    }
    if (Array.isArray(theme)) {
        throw new Error('Expected a single theme');
    }

    const arr = (pathname ?? '/').slice(1).split('.');
    let extension = '';
    let text = '';
    if (arr.length === 0) {
        text = '';
    } else if (arr.length === 1) {
        text = arr[0];
    } else {
        extension = arr.pop() as string;
        text = arr.join('.');
    }

    const parsedRequest: ParsedRequest = {
        fileType: extension === 'jpeg' ? extension : 'png',
        text: decodeURIComponent(text),
        theme: theme === 'dark' ? 'dark' : 'light',
        md: md === '1' || md === 'true',
        fontSize: fontSize ?? '96px',
        images: getArray(images),
        widths: getArray(widths),
        heights: getArray(heights),
    };
    parsedRequest.images = getDefaultImages(
        parsedRequest.images,
        parsedRequest.theme,
    );
    return parsedRequest;
}

function getArray(stringOrArray: string[] | string | undefined): string[] {
    if (typeof stringOrArray === 'undefined') {
        return [];
    } else if (Array.isArray(stringOrArray)) {
        return stringOrArray;
    } else {
        return [stringOrArray];
    }
}

function getDefaultImages(images: string[], theme: Theme): string[] {
    const defaultImage =
        'https://icon.ciffelia.com/?format=png&size=512&rounded=true';

    if (
        !images[0].startsWith('https://icon.ciffelia.com/') &&
        !images[0].startsWith('https://assets.vercel.com/') &&
        !images[0].startsWith('https://assets.zeit.co/')
    ) {
        images[0] = defaultImage;
    }
    return images;
}
