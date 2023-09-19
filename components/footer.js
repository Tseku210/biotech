const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Бидэнтэй холбоо бариарай</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mx-2 text-lg text-gray-300">
            <i className="fas fa-phone-alt"></i> +976 99119911
          </div>
          <div className="mx-2 text-lg text-gray-300">
            <i className="fas fa-envelope"></i> futurebiotech@gmail.com
          </div>
          <div className="mx-2 text-lg text-gray-300">
            <i className="fas fa-map-marker-alt"></i> Ulaanbaatar, National
            University of Mongolia
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-400">
            &copy; 2023 FUTUREBIOTECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
