'use client';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Product from '@/components/product';
import Footer from '@/components/footer';
import Team from '@/components/team';

export default function Home() {
  return (
    <div className='bg-white z-10'>
      <Navbar />
      <Hero />
      {/* <div
        className="absolute inset-0 bottom-20 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}
      <About />
      <Product />
      <Team />
      <Footer />
    </div>
  );
}
