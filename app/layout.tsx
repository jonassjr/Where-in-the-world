import { Navbar } from '@/components'
import './globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const Nunito = Nunito_Sans({ 
  weight: ['300', '600', '800'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Where in the World?',
  description: 'Find any country in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative ${Nunito.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
