interface Props {
    title:string
}
import React from 'react'
import Container from './Container'
import {motion} from 'framer-motion'

const BannerText = ({title}:Props) => {
  return (
    <div className=' hidden lg:inline-block absolute top-0 left-0 h-full w-full'>
        <Container className='flex h-full flex-col gap-y-6 justify-center'>
            <motion.h2 initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} 
            transition={{duration:0.5}}
            className='text-7xl  font-bold text-white'>{title}</motion.h2>
            <motion.p initial={{y:40, opacity:0}} whileInView={{y:0, opacity:1}} 
            transition={{duration:0.6}}  
            className='text-2xl  font-bold text-white'
            >Stock up on sportwear and limited edition collections on our <br />
            awesome mid-season sale.

            </motion.p>
            <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} 
            transition={{duration:0.7}} 
            className='flex gap-4 mt-2'
            >
                <button className='py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold active:bg-gray-700 active:text-white '>Fing out more</button>
                <button className='py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold active:bg-gray-700 active:text-white'>Shop Now</button>
            </motion.div>
        </Container>
    </div>
  )
}

export default BannerText
