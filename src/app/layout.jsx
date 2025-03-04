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
      <head>
        <link rel='shortcut icon' href='/images/icono.svg' />
      </head>
      <body>
        <div className='absolute top-0 -z-10 h-full w-full bg-white'>
          <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-principal-600/30 opacity-50 blur-[80px]'></div>
        </div>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}
