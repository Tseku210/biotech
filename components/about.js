import React from 'react';
import Logo from '../public/futurebiotech.png';
import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className='py-8 bg-white relative text-black'>
      <div className='container mx-auto px-4'>
        <div className='text-left mb-12 border-b-2'>
          <h2 className='font-extrabold text-4xl mb-4 text-black'>
            Бидний тухай
          </h2>
          <p className='text-lg text-gray-600'>
            Бидний талаар илүү ихийг мэдэцгээе
          </p>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 p-4'>
            <h3 className='text-2xl font-bold mb-4'>Бид хэн бэ</h3>
            <p className='text-lg text-gray-700 mb-4'>
              Бид бол орчин үеийн технологийг Монголд нэвтрүүлэх зорилготой
              МУИС-н дэрэгдэх компани юм.
            </p>
            <h3 className='text-2xl font-bold mb-4'>Бид юу хийдэг вэ</h3>
            <p className='text-lg text-gray-700 mb-4'>
              Хамгийн сүүлийн үеийн аргыг ашиглан Монголын зах зээлд хямд,
              ашигтай, аюулгүй бүтээгдэхүүнийг нийлүүлдэг.
            </p>
            <h3 className='text-2xl font-bold mb-4'>Яагаад бид гэж</h3>
            <p className='text-lg text-gray-700'>
              Мэргэжилийн хамт олон монголчуудийнхаа төлөө чиглэсэн зорилготой
            </p>
          </div>
          <div className='w-full md:w-1/2 p-4'>
            <Image src={Logo} alt='Logo' className='rounded shadow-xl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
