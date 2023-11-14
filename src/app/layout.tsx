import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {config} from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css"
import Navbar from '@/Components/Navbar'

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DPEC-Tickapp',
  description: 'Web app for support\'s ticket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Navbar/>
          <div className='flex-grow overflow-y-auto bg-page text-default-text'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
