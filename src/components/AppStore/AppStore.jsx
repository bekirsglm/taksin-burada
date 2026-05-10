"use client";
import Image from "next/image";
import React from "react";
import CarBooking from "../../assets/carbooking.png";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <div className="bg-[#f5f5f5] dark:bg-black dark:text-white ">
      <div className="container">
        {/* header title sections */}
        <div className="space-y-3 text-center py-14">
          <h1 data-aos="fade-up" className="text-primary text-3xl font-semibold">
            EN İYİ TAKSİ HİZMETİ UYGULAMASI
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl font-bold"
          >
            İNDİRMEK İÇİN
          </p>
        </div>

        {/*card section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center"
        >
       {/* text content section */}
          <div className="space-y-8 max-w-100 mx-auto">
            <h1 className="text-2xl font-bold">
              TaksinBurada uygulamasını hemen indir! Özel fırsatlar ve avantajlı
              kampanyaları kaçırma.
            </h1>

            <p>
              Güvenli, hızlı ve konforlu ulaşım deneyimi için mobil uygulamamızı
              kullanın. Bulunduğunuz konuma dakikalar içinde araç çağırın ve
              yolculuğunuzu kolayca takip edin.
            </p>
            {/* appstore logo section */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center">
              <a href="#">
                <Image
                  src={AppStoreImg}
                  alt="appstore logo"
                  className="max-w-37.5 sm:max-w-30 md:max-w-50"
                />
              </a>
              <a href="#">
                <Image
                  src={PlayStoreImg}
                  alt="google playstore logo"
                  className="max-w-37.5 sm:max-w-30 md:max-w-50"
                />
              </a>
            </div>
          </div>

          <div>
            <Image src={CarBooking} alt="taksi" 
            className="max-w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
