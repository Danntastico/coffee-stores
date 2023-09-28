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
      <body className={`${roboto.className} bg-gray-50 m-4`}>
        <nav className="text-green-700 p-4 border-b-2 border-gray-100">
          <div className="container mx-auto">
            <h1 className="text-2xl font-black">Coffee Stores<span className='text-orange-700'>.</span></h1>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
