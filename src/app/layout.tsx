import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationBar } from './components/Nav/NavigationBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cambridge Coding Exam',
  description: 'Cambridge coding exam created by Ella Tuquero',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavigationBar />
          {children}
      </body>
    </html>
  )
}
