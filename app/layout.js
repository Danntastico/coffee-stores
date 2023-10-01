import Link from 'next/link'
import './globals.css'
import { Roboto_Flex } from 'next/font/google'
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript, Button } from '@mantine/core';

const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Coffe stores',
  description: 'Discover Coffe stores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${roboto.className} bg-gray-100`}>
        <MantineProvider>
          <nav className="flex justify-between text-green-700 p-4 border-b-2 border-gray-200">
            <div className="container mx-auto">
              <Link href='/'>
                <h1 className="text-2xl font-black">Coffee Stores<span className='text-orange-700'>.</span></h1>
              </Link>
            </div>
            <Link href='/search'>
              <Button className='bg-green-700' color='green'>Search</Button>
            </Link>
          </nav>
          <div>
            {children}
          </div>
        </MantineProvider>
      </body>
    </html>
  )
}
