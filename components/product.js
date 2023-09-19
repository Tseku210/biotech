import Image from "next/image";
import Em from "../public/em.jpg";

const Product = () => {
  return (
    <div id="product" className="py-8 bg-white relative text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="font-extrabold text-4xl mb-4 text-black">
            Бидний бүтээгдэхүүн
          </h2>
          <p className="text-lg text-gray-600">Learn more about what we do</p>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-4 transition-transform duration-500 hover:transform hover:-translate-y-3">
              <Image
                src={Em}
                alt="Logo"
                className="rounded-xl shadow-lg border-2"
              />
            </div>
            <div className="w-full text-left md:w-1/2 p-4 text-lg leading-8">
              Шүлхий өвчнийг эмчлэх, түүнээс урьдчилан сэргийлэх зорилгоор
              хэрэглэдэг хавсарсан эм юм. Тэрээр ортивимаб ба консивимаб гэсэн
              хоёр моноклональ эсрэгбиеэс бүрддэг бөгөөд тэдгээрийг судсаар
              болон арьсан доорх тарилга хэлбэрээр хийдэг.
            </div>
          </div>
          <div className="flex justify-center items-center bg-gray-100 w-2/3 mt-5 p-5 rounded-2xl">
            <div className="font-bold text-2xl text-blue-500 mr-10">Заавар</div>
            <div className="text-lg text-justify italic text-gray-700">
              800 кг – эр үхэр, адуу – 40 ммоль/л M8, 32 ммоль/л M170 500 кг –
              эм үхэр, адуу – 25, 20 50 кг – тугал, эм хонь, ямаа – 25, 20 100
              кг - насанд хүрсэн хонь, ямаа - 5, 4 10 кг – хурга, ишиг – 0.5,
              0.4 Давсны уусмал (0.9% натрийн хлорид) болон амьтны ийлдэст
              шингэлнэ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
