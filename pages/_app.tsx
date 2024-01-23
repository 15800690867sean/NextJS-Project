import '@/app/styles/globals.css';
import MainHeader from '@/components/layout/main-header';
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
        <MainHeader />
        <Component {...pageProps}/>
    </div>
  )
}
