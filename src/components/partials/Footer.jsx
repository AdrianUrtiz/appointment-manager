import { useTexts } from '@/hooks/useTexts'

export default function Footer() {
  const texts = useTexts()

  return (
    <div class='max-w-[90%] mx-auto items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2'>
      <p class='text-sm/6 text-slate-600 max-md:text-center'>
        {texts.footer.copyright}
      </p>
      <div class='flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end'>
        <a href=''>{texts.footer.privacy}</a>
        <div class='h-4 w-px bg-slate-200'></div>
        <a href=''>{texts.footer.terms}</a>
      </div>
    </div>
  )
}
