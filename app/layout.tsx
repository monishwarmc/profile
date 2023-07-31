
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monishwar M C',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/me.png'/>
        
        
        <meta property="og:title" content="Monishwar M C"/>
        <meta property="og:description" content="web3 enthusiast"/>
        <meta property="og:image" content="./me.png"/>
        <meta property="og:url" content="monishwar.social"/>
              
      </head>
      <body className={inter.className}>

        {children}

      </body>
    </html>
  )
}
