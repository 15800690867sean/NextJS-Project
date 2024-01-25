import '@/app/styles/globals.css';
import MainHeader from '@/components/layout/main-header';
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "NextJS Events",
}
