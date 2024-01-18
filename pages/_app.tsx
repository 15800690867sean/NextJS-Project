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
    <div>
        <MainHeader />
        <Component {...pageProps}/>
    </div>
  )
}
