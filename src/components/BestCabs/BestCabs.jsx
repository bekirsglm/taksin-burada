import Img2 from "../../assets/car2.png";
import Image from "next/image";

const BestCabs = () => {

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Ekonomi Sınıfı",
    price: "10₺/km",
    description:
      "Uygun fiyatlı, güvenli ve konforlu ulaşım hizmeti ile şehir içi yolculuklarınızı kolaylaştırın.",
    aosDelay: "100",
  },

  {
    id: 2,
    img: Img2,
    name: "Standart Sınıf",
    price: "19₺/km",
    description:
      "Modern araçlarımız ve deneyimli sürücülerimiz ile rahat ve hızlı bir ulaşım deneyimi yaşayın.",
    aosDelay: "300",
  },

  {
    id: 3,
    img: Img2,
    name: "Business Sınıfı",
    price: "30₺/km",
    description:
      "Premium araç seçenekleri ile lüks, konforlu ve ayrıcalıklı bir yolculuk deneyimi sunuyoruz.",
    aosDelay: "500",
  },
];
  return (
    <div className="py-10 bg-white dark:bg-dark text-black dark:text-white">
      <div className="container">
        {/* header title section */}
        <div data-aos="fade-up" data-aos-delay="300" className="text-center mb-40">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            TAKSİ HİZMETLERİMİZ
          </h1>
          <span className="text-xl font-bold text-black/60 dark:text-white mb-10">Sizin için en iyi olanı hemen tercih edin anında ayağınıza gelsin</span>
        </div>

        {/* best taxi card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-14 place-items-center">
          {ServicesData.map(({ price ,id, img, name, description, aosDelay }) => {
            return (
              <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className="group rounded-2xl bg-white dark:bg-black hover:bg-primary! shadow-xl duration-200  max-w-75 relative " >
                {/* image section */}
                <div className="h-27.5 ">
                  <Image
                    className="max-w-50 block mx-auto transform -translate-y-20 group-hover:scale-110  group-hover:translate-x-4 duration-300" 
                    src={img}
                    alt="sarı taksi" />
                </div>

                {/* text content section */}
                <div className="p-4 text-center space-y-4">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 group-hover:text-black  duration-300 text-sm line-clamp-2">{description}</p>
                  <p className="text-primary text-2xl font-bold group-hover:text-black">
                    {price}
                  </p>
                  <button className="bg-black text-white px-4 py-2 rounded-lg">
                    Daha Fazla Bilgi
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestCabs;
