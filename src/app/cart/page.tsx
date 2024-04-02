"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { StateProps } from '../../../type'
import Container from '@/components/Container'
import CartItem from '@/components/CartItem'
import { resetCart } from '@/redux/shoppingSlice'
import toast, { Toaster } from 'react-hot-toast'
import PaymentCart from '@/components/PaymentCart'
import Link from 'next/link'

const CartPage = () => {
  const {productData}= useSelector((state:StateProps)=>state?.shopping)
   const dispatch = useDispatch()
  return (
<Container>
  {
    productData.length>0 ?    <Container>
    <h2 className='text-2xl font-semibold mb-2'>Cart</h2>
    <div>
      <CartItem/>
    </div>
    <div onClick={()=>dispatch(resetCart()) && toast.success(`cart is empty`)} className='flex items-center justify-end mt-2'>
      <button className='bg-red-500 text-bs font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white rounded-md active:bg-red-500 active:text-white'>reset cart</button>
    </div>
    <div>
      {/* payment cart */}
      <PaymentCart/>
    </div>
    <Toaster/>
   </Container>: <div className='flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4'>
    <p className='border-[1px] border-orange-600 w-full p-2 text-center'>Your product cart is currently empty.</p>
    <Link href={'/'}>
    <button className='text-base mt-1 text-white font-semibold animate-bounce px-6 py-2  bg-black hover:bg-gray-800 hover:text-white active:bg-white active:text-black duration-200 rounded-lg'>Return to shop</button>
    </Link>
   </div>
  }
</Container>
  )
}

export default CartPage
