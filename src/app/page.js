import React from "react";
import Navbar from "@/section/navbar";
import Hero from "@/section/hero";
import Product from "@/section/products";
import Footer from "@/section/footer";

export default function Home() {
  return (

    <>
      <Navbar />
      <Hero />
      <Product />
      {/* <WhyUs/>    */}
      <Footer />
    </>

  );
}
