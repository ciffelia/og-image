import Head from 'next/head';

const PreviewHead: React.VFC = () => (
  <Head>
    <meta name="robots" content="noindex,nofollow" />
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      crossOrigin="anonymous"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700"
      rel="stylesheet"
      crossOrigin="anonymous"
    />
  </Head>
);

export default PreviewHead;
