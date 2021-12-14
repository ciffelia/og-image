import Head from 'next/head';

const FontHead: React.VFC = () => (
  <Head>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700"
      rel="stylesheet"
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  </Head>
);

export default FontHead;
