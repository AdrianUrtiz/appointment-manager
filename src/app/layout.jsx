import '@/assets/globals.css'
import NavMenu from '@/components/partials/NavMenu'
import { Nunito, Dancing_Script } from 'next/font/google'
import { useTexts } from '@/hooks/useTexts'

const texts = useTexts()

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})

export const metadata = {
  title: texts.meta.title,
  description: texts.meta.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' className={`${nunito.variable} ${dancingScript.variable}`}>
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
