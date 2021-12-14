import type { NextPage } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Form from '@/components/home/Form';

const HomePage: NextPage = () => {
  return (
    <Provider store={store}>
      <Head>
        <title>Open Graph Image as a Service</title>
        <meta
          name="description"
          content="A service to generate dynamic Open Graph images on-the-fly for the purpose of sharing a website to social media. Proudly hosted on Vercel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-w-screen min-h-screen flex justify-center p-5 md:py-10">
        <main className="w-full max-w-xl flex flex-col items-center gap-5 md:gap-8 font-sans">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api/gen"
            alt="image preview"
            width="1200"
            height="630"
            className="w-full shadow rounded-md"
          />
          <Form />
        </main>
      </div>
    </Provider>
  );
};

export default HomePage;
