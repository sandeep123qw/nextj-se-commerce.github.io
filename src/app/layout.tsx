import type { Metadata } from "next";

import "../css/globals.css";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title:{
    template: "shopping mart",
    default: "Shopping Mart- a place for all"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg">
        <Layout>
          <Header/>
          {children}
          <Footer/>
        </Layout>
        
        </body>
    </html>
  );
}
