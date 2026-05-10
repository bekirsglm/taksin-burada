  "use client";
  import React from "react";
  import BgImage from "../../assets/girl.jpg";
  import BannerCard from "./BannerCard.jsx";
  import { SlStar } from "react-icons/sl";

  const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "520px",
    width: "100vw",
  };

  const About = () => {
    return (
      <div style={bgStyle}>
        <div className="text-white bg-black/80 min-h-132.5 flex items-center py-10">
          <div className="container">
            {/* header title section */}
            <div className="space-y-3 text-center py-14">
              <p  data-aos="fade-up"
              data-aos-delay="300" className="text-primary text-2xl font-semibold">
                EN İYİ HİZMETLERİMİZ
              </p>
              <h1  data-aos="fade-up"
              data-aos-delay="300"
              className="text-3xl">BEKLEDİĞİNDEN DAHA İYİSİ</h1>
            </div>

            {/* card sections */}
            <div  data-aos="fade-up"
              data-aos-delay="300" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-8">
                <BannerCard
                  title={"7/24 Taksi Hizmeti"}
                  description={
                    "Günün her saati güvenli ve hızlı ulaşım hizmeti ile bulunduğunuz konuma dakikalar içinde araç yönlendirin."
                  }
                  icon={<SlStar />}
                />

                <BannerCard
                  title={"Deneyimli Şoförler"}
                  description={
                    "Profesyonel ve deneyimli sürücülerimiz sayesinde konforlu ve güvenli bir yolculuk deneyimi yaşayın."
                  }
                  icon={<SlStar />}
                />
              </div>

              <div className="space-y-8">
                <BannerCard
                  title={"Hızlı Rezervasyon"}
                  description={
                    "Kolay rezervasyon sistemi ile birkaç saniye içinde taksi çağırabilir ve anlık araç durumunu takip edebilirsiniz."
                  }
                  icon={<SlStar />}
                />

                <BannerCard
                  title={"Uygun Fiyat Garantisi"}
                  description={
                    "Şeffaf fiyatlandırma sistemi sayesinde sürpriz ücretlerle karşılaşmadan ekonomik yolculuk yapın."
                  }
                  icon={<SlStar />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;
