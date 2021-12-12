import puppeteer from 'puppeteer';
import chromeLambda from 'chrome-aws-lambda';
import { FileType } from './schema';

const isLambda = process.env.AWS_REGION !== undefined;

let browser: puppeteer.Browser | undefined;

async function createBrowser(): Promise<puppeteer.Browser> {
  const options = isLambda
    ? {
        args: chromeLambda.args,
        executablePath: await chromeLambda.executablePath,
      }
    : {};

  return await puppeteer.launch(options);
}

export async function takeScreenshot(
  url: string,
  type: FileType,
): Promise<Buffer> {
  if (typeof browser === 'undefined') {
    browser = await createBrowser();
  }

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url, {
    timeout: 10000,
    waitUntil: 'networkidle0',
  });
  const file = await page.screenshot({ type });

  await context.close();

  return file as Buffer;
}
