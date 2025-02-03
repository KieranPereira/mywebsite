import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, PropsWithChildren } from 'react';

import { HomepageMeta } from '../../data/dataDef';
import Header from '../Sections/Header'; // ✅ Import Header
import Footer from '../Sections/Footer'; // ✅ Import Footer

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({ children, title, description }) => {
  const { asPath: pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />
      </Head>

      <Header /> {/* ✅ Ensure Header is included */}
      <main className="min-h-screen">{children}</main> {/* ✅ Main content */}
      <Footer /> {/* ✅ Ensure Footer is included */}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
