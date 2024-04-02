"use client"

import Image from "next/image"
import FormattedPrice from "./FormattedPrice";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast from "react-hot-toast";
 import {Toaster} from "react-hot-toast";

const SingleProducts = ({product}:any) => {
  const dispatch = useDispatch()
    
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
     <div>
     <Image src={product?.image} alt="product image" width={500} height={500}
      className="w-full max-h-[700px] object-cover rounded-lg"
      />
     </div>
     <div className="flex flex-col justify-center gap-y-10">
        <div className="flex flex-col gap-y-4">
            <p className="text-3xl font-semibold">{product?.title}</p>
            <p className="text-xl font-semibold"><FormattedPrice amount={product?.price}/></p>
        </div>
        <p className="text-gray-800">{product?.description}</p>
        <div className="flex flex-col">
          <span className="text-darkText">SKU: <span className="text-black">{product?._id}</span></span>
          <span className="text-darkText">Category: <span className="text-black">{product?.category}</span></span>
        </div>
        <div onClick={()=>dispatch(addToCart(product)) && toast.success(`${product?.title.substring(0,15)} added successfully`)} className="flex items-center cursor-pointer group">
          <button className="bg-darkText text-white rounded-md px-3 py-2 hover:bg-orange-600 hover:text-white active:text-black active:bg-white duration-200">add to cart</button>
      
        </div>
        <p className="flex items-center gap-x-2 text-sm"> < MdFavoriteBorder className="text-xl "/> Add to wishlist</p>
     </div>
     <Toaster/>
    </div>
  )
}

export default SingleProducts
