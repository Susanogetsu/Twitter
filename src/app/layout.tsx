import { LayoutProvider } from './LayoutProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Clon de twitter',
  description: 'con Supabase, React y Typescript'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <link rel="shortcut icon" href="/favicon.ico" />
        <Providers>
          <LayoutProvider>
            {children}
          </LayoutProvider>
        </Providers>
      </body>
    </html>
  )
}
