import Image from "next/image";
import Logo from "../public/futurebiotech.png";

const Navbar = () => {
  const scrollTo = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-between items-center py-5 px-20 shadow-md text-black z-50 border-b-2 relative bg-white">
      <Image alt="logo" src={Logo} width={150} height={150} />
      <div className="gap-20 lg:flex md:flex hidden">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}>
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}>
          About
        </a>
        <a
          href="#product"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#product");
          }}>
          Product
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#contact");
          }}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
