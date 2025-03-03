import '@/assets/globals.css'
import NavMenu from '@/components/partials/NavMenu'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Appointment Manager',
  description: 'Created with <3',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' className={nunito.variable}>
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
