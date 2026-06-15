import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />
      </Head>
      <main className="min-h-screen bg-deck-bg text-deck-text">{children}</main>
    </>
  );
});

Page.displayName = 'Page';
export default Page;
