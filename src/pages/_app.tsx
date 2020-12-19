import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return <Meta><Component {...pageProps} /></Meta>
}

// MyApp.getInitialProps = async function getInitialProps(appContext) {
//   const { req, res } = appContext.ctx;
//   const appProps = await App.getInitialProps(appContext);  
//   if (req?.headers?.accept?.split(',').filter(_ => _ === 'text/html')[0]) {
//     return { ...appProps }
//   } else {
//     res.writeHead(200, { 'Content-Type': 'text/json' });
//     res.write(JSON.stringify(appProps?.pageProps?.props));
//     res.end();

//     return {
//       props: {}
//     };
//   }
// }

function Meta({children}) {
  return <>
    <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>facturation</title>
        <link href='/styles/font-awesome.css' rel='stylesheet' type='text/css' />
        <link href='/styles/bootstrap.css' rel='stylesheet' type='text/css' />
        <link href='/styles/toastr.css' rel='stylesheet' type='text/css' />
        <link href='/styles/sb-admin-2.css' rel='stylesheet' type='text/css' />
        <script src="/scripts/jquery.js" />
        <script src="/scripts/bootstrap.js" />
        <script src="/scripts/sb-admin-2.js" />
    </Head>
    {children}
  </>
}