import '@/app/styles/globals.css';
import MainHeader from '@/components/layout/main-header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
