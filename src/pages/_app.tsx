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
        <link rel = "manifest" href = "/site.webmanifest.json"></link>
        <link href='/styles/font-awesome.css' rel='stylesheet' type='text/css' />
        <link href='/styles/bootstrap.css' rel='stylesheet' type='text/css' />
        <link href='/styles/toastr.css' rel='stylesheet' type='text/css' />
        <link href='/styles/sb-admin-2.css' rel='stylesheet' type='text/css' />
        <style dangerouslySetInnerHTML={{__html: `
          html, body, #__next { 
            width: 100%;
            height: 100%;
          }
        `}} />
        <script src="/scripts/jquery.js" />
        <script src="/scripts/bootstrap.js" />
        <script src="/scripts/sb-admin-2.js" />
        <script src="/scripts/pwa.js" />
    </Head>
    {children}
  </>
}