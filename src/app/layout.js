import './globals.css'

export const metadata = {
  title: 'Appointment Manager',
  description: 'Created with <3',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
