"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BgImage from "../../assets/testimonial.png";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    text: "TaksinBurada sayesinde dakikalar içinde araç bulabiliyorum. Şoförler oldukça kibar ve yolculuklar çok konforlu geçiyor.",
    img: "https://picsum.photos/101/101",
  },

  {
    id: 2,
    name: "Zeynep Kaya",
    text: "Uygulama gerçekten çok hızlı çalışıyor. Özellikle yoğun saatlerde bile kısa sürede taksi çağırabiliyorum.",
    img: "https://picsum.photos/102/102",
  },

  {
    id: 3,
    name: "Mehmet Demir",
    text: "Fiyatlandırma sistemi oldukça şeffaf. Yolculuk öncesinde ücret tahmini görmek büyük avantaj sağlıyor.",
    img: "https://picsum.photos/103/103",
  },

  {
    id: 4,
    name: "Elif Şahin",
    text: "Gece geç saatlerde güvenli ulaşım için sürekli kullanıyorum. Şimdiye kadar hiç sorun yaşamadım.",
    img: "https://picsum.photos/104/104",
  },

  {
    id: 5,
    name: "Burak Arslan",
    text: "Araçlar temiz ve sürücüler oldukça profesyonel. İstanbul içi ulaşım artık çok daha kolay hale geldi.",
    img: "https://picsum.photos/105/105",
  },

  {
    id: 6,
    name: "Ayşe Koç",
    text: "Rezervasyon sistemi çok pratik. Birkaç dokunuşla istediğim konuma hızlıca araç çağırabiliyorum.",
    img: "https://picsum.photos/106/106",
  },

  {
    id: 7,
    name: "Can Özdemir",
    text: "Uygulamanın arayüzü çok sade ve kullanışlı. İlk kez kullanan biri bile rahatlıkla taksi çağırabilir.",
    img: "https://picsum.photos/107/107",
  },

  {
    id: 8,
    name: "Merve Aksoy",
    text: "Business sınıf araçlar gerçekten çok kaliteli. Özellikle iş toplantıları için tercih ediyorum.",
    img: "https://picsum.photos/108/108",
  },

  {
    id: 9,
    name: "Emre Çelik",
    text: "Sürücüler konumumu hızlıca bulabiliyor. Bekleme süresi diğer uygulamalara göre çok daha kısa.",
    img: "https://picsum.photos/109/109",
  },

  {
    id: 10,
    name: "Selin Aydın",
    text: "Hem güvenli hem ekonomik bir ulaşım deneyimi sunuyor. Artık toplu taşıma yerine bunu tercih ediyorum.",
    img: "https://picsum.photos/110/110",
  },
];

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider config
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div style={bgStyle}>
      <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
        <div className="container">
          {/* header section */}
          <div data-aos="fade-up" className="text-center mb-10">
            <h1 className="text-4xl font-bold">KULLANICI DENEYİMLERİ</h1>
          </div>

          {/* Testimonials cards Section */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6 px-3">
                    <div className="min-h-[230px] max-w-[360px] mx-auto flex flex-col justify-between gap-6 shadow-lg py-8 px-6 rounded-3xl bg-white dark:bg-dark relative">
                      {/* content section */}
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-sm leading-6">{text}</p>
                      </div>

                      {/* image section */}
                      <div className="flex items-center gap-4">
                        <img
                          src={img}
                          alt={name}
                          className="rounded-full w-16 h-16 object-cover"
                        />

                        <div className="space-y-1">
                          <h1 className="text-xl font-bold text-black/60 dark:text-primary">
                            {name}
                          </h1>

                          <p className="text-sm font-bold text-black/45 dark:text-white">
                            Kullanıcı
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;