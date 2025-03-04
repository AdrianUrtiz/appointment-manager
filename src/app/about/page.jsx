'use client'

import Footer from '@/components/partials/Footer'

function page() {
  return (
    <>
      <div className='min-h-screen w-full flex flex-col items-center justify-center'>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          You can use this page to tell your users a little bit about your app
        </p>
        <p>You can also use this page to document your app</p>
      </div>
      <Footer />
    </>
  )
}

export default page
