import React from "react";
import Logo from "../public/futurebiotech.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-8 bg-white relative text-black">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12 border-b-2">
          <h2 className="font-extrabold text-4xl mb-4 text-black">
            Бидний тухай
          </h2>
          <p className="text-lg text-gray-600">Learn more about what we do</p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-lg text-gray-700 mb-4">
              We are a dedicated team of professionals who are passionate about
              our work.
            </p>
            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
            <p className="text-lg text-gray-700 mb-4">
              We provide high-quality services that meet our clients needs.
            </p>
            <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
            <p className="text-lg text-gray-700">
              We have years of experience and a reputation for excellence.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Image src={Logo} alt="Logo" className="rounded shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
