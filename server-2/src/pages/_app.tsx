import React from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return <Meta><Component {...pageProps} /></Meta>
}

function Meta({children}) {
  return <>
    <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>facturation</title>
        <style>{`
            body, html, #__next {
                height: 100%;
                width: 100%;
                margin: 0;
            }
        `}</style>
    </Head>
    {children}
  </>
}