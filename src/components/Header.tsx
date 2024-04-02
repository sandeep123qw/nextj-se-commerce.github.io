"use client"

import React, { useEffect, useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image';

import { useSession,signIn,signOut } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import type { Products, StateProps } from '../../type';
import FormattedPrice from './FormattedPrice';
import Link from 'next/link';
import { addUser, deleteUser } from '@/redux/shoppingSlice';
import { BsBookmarks } from 'react-icons/bs';



const Header = () => {
  const {data:session} = useSession()
  const dispatch = useDispatch()
  const {productData,orderData} = useSelector((state:StateProps)=>state.shopping)
 
  useEffect(()=>{
    if(session){
     dispatch(addUser({
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
     }))

    }else{
      dispatch(deleteUser())
    }
  },[session,dispatch])

  const [totalAmount,setTotalAmount]= useState(0)
  useEffect(()=>{
    let amt = 0;
    productData.map((item:Products)=>{
      amt+= item.price * item.quantity;
      return
    })
    setTotalAmount(amt)
  },[productData])
  
  return (
    <div className='bg-bodyColor h-20 top-0 sticky z-50'>
      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
       <Logo/>
       {/* serch field */}
       <div className='w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText rounded-full px-4 py-1.5 focus-within:border-orange-600 bg-white group'>
       <IoIosSearch className='text-black group-focus-within:text-gray-500 ' />
        <input type="text" placeholder='search for products' className='placeholder:text-sm flex-1 outline-none'  />
       </div>
       {/* login register */}
    {
      !session && (   <div onClick={()=>signIn()} className='bg-gray-800  rounded-full text-slate-100 flex items-center justify-center gap-x-1  px-3  py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative hover:bg-white hover:text-black active:bg-gray-600 active:text-white cursor-pointer'>
      <AiOutlineUser className='text-2xl' />
      <p className='text-sm font-semibold cursor-pointer'>Login\Register</p>

      </div>)
    }
       {/* cart btn */}
  <Link href={'/cart'}>
  <div className='bg-gray-800  rounded-full text-slate-100 flex items-center justify-center gap-x-1  px-3  py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative hover:bg-white hover:text-black active:bg-gray-600 active:text-white cursor-pointer'>
       <IoMdCart className='text-xl'/>
       <p><FormattedPrice amount={totalAmount? totalAmount:0}/></p>
       <span className='bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black'>
        {productData? productData?.length:0}</span>
       </div>
  </Link>
      {/* image of user */}
      {
        session && <Image src={session?.user?.image as string} alt="image" height="50" width="50"
        className='rounded-full object-cover'
        />
      }

      {/* order btn */}
      {
        orderData?.order?.length>0 && session && (
          <Link href={'/order'} >
            <BsBookmarks className='text-2xl text-red-700'/>
            <p className='text-sm font-semibold  text-red-700'>Orders</p>
          </Link>
        )
      }

       {/* logout btn */}
       <div>
       {
        session && ( <div onClick={()=>signOut()} className='bg-gray-800  rounded-full text-slate-100 flex items-center justify-center gap-x-1  px-3  py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative hover:bg-white hover:text-black active:bg-gray-600 active:text-white'>
        <FiLogOut className='text-2xl' />
        <p className='text-sm font-semibold'>logout</p>
        </div>)
       }
       </div>
      </Container> 
    </div>
  )
}

export default Header
