import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open Graph Image as a Service</title>
        <meta
          name="description"
          content="A service to generate dynamic Open Graph images on-the-fly for the purpose of sharing a website to social media. Proudly hosted on Vercel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center gap-10 p-10 font-sans">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>
    </>
  );
};

export default Home;
