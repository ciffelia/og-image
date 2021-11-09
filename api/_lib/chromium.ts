import puppeteer from 'puppeteer';
import chromeLambda from 'chrome-aws-lambda';
import { FileType } from './types';

const isLambda = process.env.AWS_REGION !== undefined;

let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;

async function getPage(): Promise<puppeteer.Page> {
    if (browser == null) {
        const options = isLambda
            ? {
                  args: chromeLambda.args,
                  executablePath: await chromeLambda.executablePath,
              }
            : {};
        browser = await puppeteer.launch(options);
    }

    if (page == null) {
        page = await browser.newPage();
    }

    return page;
}

export async function getScreenshot(
    html: string,
    type: FileType,
): Promise<Buffer> {
    const page = await getPage();
    await page.setViewport({ width: 2048, height: 1170 });
    await page.setContent(html);

    const file = await page.screenshot({ type });
    return file as Buffer;
}
