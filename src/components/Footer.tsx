import React from "react";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import payment from '@/images/payment.png'
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return <div className="w-full bg-darkText text-slate-100">
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12">
        <div className="flex flex-col gap-y-4">
            <Logo/>
            <p>welcome to smart ecommerce website,here you can shop different top products ,products of different of around the globe is available here our services are fast and reliable , start your day of shopping with smart.</p>
           <div className="flex items-center gap-x-3">
            
           <span className="bg-slate-100 p-1 inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 text-darkText hover:text-white cursor-pointer duration-200 active:bg-black active:text-white w-7 "><BsYoutube/></span>
           <span className="star"><BsFacebook/></span>
           <span className="star"><BsGithub/></span>
           <span className="star "><BsLinkedin/></span>
           <span className="star"><BsReddit/></span>
         
           </div>
        </div>
        <div>
          <p className="text-lg">Laset posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Newsletter
            </li>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2">Pay us with your trusted services</p>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
    </Container>
  </div>;
};

export default Footer;
