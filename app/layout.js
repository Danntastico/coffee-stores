import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import { Roboto_Flex } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Coffe stores',
  description: 'Discover Coffe stores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-100`}>
        <nav className="text-green-700 p-4 border-b-2 border-gray-200">
          <div className="container mx-auto">
            <h1 className="text-2xl font-black">Coffee Stores<span className='text-orange-700'>.</span></h1>
          </div>
        </nav>
        <div className='m4'>
          {children}
        </div>
      </body>
    </html>
  )
}
