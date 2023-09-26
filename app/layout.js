import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coffe stores',
  description: 'Discover Coffe stores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-900 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-semibold">Coffee Stores</h1>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
