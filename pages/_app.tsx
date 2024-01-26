import '@/app/styles/globals.css';
import MainHeader from '@/components/layout/main-header';
import Head from 'next/head';
import { ElementType } from 'react';

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: ElementType,
  pageProps: Record<string, any>,
}) {
  return (
    <div style={{height: '100vh', overflow: 'hidden'}}>
        <Head>
          <title>NextJS Events</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <MainHeader />
        <Component {...pageProps}/>
    </div>
  )
}
