import puppeteer from 'puppeteer';
import chromeLambda from 'chrome-aws-lambda';
import { imageHeight, imageWidth } from '@/utils/common/constants';

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

export async function takeScreenshot(url: string): Promise<Buffer> {
  if (typeof browser === 'undefined') {
    browser = await createBrowser();
  }

  const page = await browser.newPage();

  await page.setViewport({ width: imageWidth, height: imageHeight });
  await page.goto(url, {
    timeout: 10000,
    waitUntil: 'networkidle0',
  });
  const file = await page.screenshot();

  return file as Buffer;
}
