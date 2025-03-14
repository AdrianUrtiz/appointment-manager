'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useTexts } from '@/hooks/useTexts'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const texts = useTexts()

  const navigation = [
    { name: `${texts.nav.home}`, href: '/' },
    { name: `${texts.nav.about}`, href: '/about' },
    { name: `${texts.nav.services}`, href: '#' },
    { name: `${texts.nav.pricing}`, href: '#' },
    { name: `${texts.nav.contact}`, href: '#' },
    { name: `${texts.nav.avaibility}`, href: '#' },
  ]

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 backdrop-blur-sm'>
      <nav
        aria-label='Global'
        className='flex items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>{texts.nav.home}</span>
            <img alt='' src='/images/icono.svg' className='h-8 w-auto' />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={handleMobileMenuOpen}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
            <span className='sr-only'>{texts.nav.openMainMenu}</span>
            <Menu aria-hidden='true' className='size-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm/6 font-semibold text-gray-900'>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link href='/login' className='text-sm/6 font-semibold text-gray-900'>
            {texts.nav.login} <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'>
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>{texts.nav.home}</span>
              <img alt='' src='/images/icono.svg' className='h-8 w-auto' />
            </Link>
            <button
              type='button'
              onClick={handleMobileMenuOpen}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>{texts.nav.closeMainMenu}</span>
              <X aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='/login'
                  onClick={handleLinkClick}
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>
                  {texts.nav.login}
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
