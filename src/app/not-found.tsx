import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
  <Container className='flex items-center justify-center py-20'>
    <div className='max-w-screen-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-6'>
    <h2 className='text-base font-bold'>Your page note found</h2>
  
    <p className='text-base font-medium text-center '>
        Oops! the page you are looking for does not exist.
         It might have been moved or deleted
    </p>
       
        <Link href={'/'}>
            <button className='px-4 py-4 rounded-full bg-black text-white hover:bg-darkText hover:text-white active:bg-white active:text-black duration-200 border-[1px] border-red-500'>Back to Home</button>
        </Link>
        </div>
      </Container>
  )
}

export default NotFoundPage
