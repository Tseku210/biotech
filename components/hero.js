import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import dynamic from "next/dynamic";
const ParticlesBackground = dynamic(
  () => import("@/components/particlesBackground"),
  {
    ssr: false,
  }
);

const Hero = () => {
  return (
    <div
      id="home"
      className="flex justify-center items-center relative min-h-screen min-w-full overflow-hidden">
      <div className="overflow-hidden">
        <ParticlesBackground />
      </div>
      <div className="relative z-10 text-center pb-12 md:pb-16">
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-black"
          data-aos="zoom-y-out">
          Make your website{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            wonderful
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xl text-gray-600 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;