import type { NextPage } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import HomePreview from '@/components/home/HomePreview';
import ImageUrl from '@/components/home/ImageUrl';
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
          <div className="w-full sticky top-0">
            <HomePreview />
          </div>
          <ImageUrl />
          <Form />
        </main>
      </div>
    </Provider>
  );
};

export default HomePage;
