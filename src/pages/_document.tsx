import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Note: thanks to font optimization, we don't need to add "preconnect" explicitly */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
