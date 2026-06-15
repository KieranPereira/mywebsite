import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import {homePageMeta} from '../../data/data';

const DeckLayout = memo(({children}: PropsWithChildren) => {
  const {title, description} = homePageMeta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
      </Head>
      {children}
    </>
  );
});

DeckLayout.displayName = 'DeckLayout';
export default DeckLayout;
