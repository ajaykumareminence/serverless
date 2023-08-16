// import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import ReduxProvider from '@/store/provider'
import "bootstrap/dist/css/bootstrap.css"
import { Toaster } from 'react-hot-toast'
import Bootstrap from '@/providers/Bootstrap'
const inter = Josefin_Sans({ subsets: ['latin'], weight: '500', style: 'normal' })

export const metadata = {
  title: 'Cug',
  description: 'Cug with redux',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Bootstrap>
            {children}
          </Bootstrap>
        </ReduxProvider>
        <Toaster
          position='bottom-right'
        />
      </body>
    </html>
  )
}
