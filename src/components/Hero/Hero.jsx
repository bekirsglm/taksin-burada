import yellowCab from "../../assets/yellow-cab.png";
import bgCity from "../../assets/city.jpg";
import Image from "next/image";

const Hero = () => {
  const bgStyle = {
    backgroundImage: `url(${bgCity.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "520px",
    width: "100%",
  };

  return (
    <div style={bgStyle}>
      <div className="dark:bg-black/40 bg-white/40 backdrop-blur-sm dark:text-white duration-300 h-130 flex">
        <div className="container grid grid-cols-1 place-items-center">
          {/* text- content section */}
          <div className="text-center space-y-5 py-14">
            <p
            data-aos="fade-up"
             className="text-primary text-3xl font-semibold">
              HEMEN TAKSİ ÇAĞIR
            </p>
            <h1 
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-4xl md:text-6xl  font-bold">+90 212 534 27 81</h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="tracking-[8px] text-base sm:text-xl font-semibold"
            >
              www.taksinburada.com
            </p>
          </div>
          {/* image section */}
          <div 
          data-aos="zoom-in-right"
          data-aos-duration="1000">
            <Image src={yellowCab} alt="sarı taksi"
            className="max-h-115 sm:scale-125 sm:translate-y-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
