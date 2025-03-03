import '@/assets/globals.css'
import NavMenu from '@/components/partials/NavMenu'

export const metadata = {
  title: 'Appointment Manager',
  description: 'Created with <3',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
