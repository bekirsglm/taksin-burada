import React from "react";
import {
  FaAndroid,
  FaAppStoreIos,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaMousePointer,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* upper section banner */}
      <div className="bg-primary">
        <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
          <p>7 GÜN 24 SAAT ÇAĞRILARINIZ İÇİN HAZIRIZ</p>

          <h1 className="text-3xl md:text-5xl font-bold">+90 212 534 27 81</h1>
        </div>
      </div>

      {/* bottom footer section */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
        {/* first col section */}
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold border-b-8 border-primary">
            HAKKIMIZDA
          </h1>

          <p>
            TaksinBurada, İstanbul genelinde güvenli, hızlı ve konforlu ulaşım
            hizmeti sunan modern bir taksi platformudur. Deneyimli sürücüler ve
            güçlü altyapımız ile yolculuklarınızı daha kolay hale getiriyoruz.
          </p>

          {/* social links */}
          <div className="flex items-center text-primary gap-3 text-2xl">
            <FaFacebook className="cursor-pointer hover:scale-110 duration-300" />
            <FaInstagram className="cursor-pointer hover:scale-110 duration-300" />
            <FaXTwitter className="cursor-pointer hover:scale-110 duration-300" />
          </div>
        </div>

        {/* second col section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold border-b-8 border-primary">
            MOBİL UYGULAMA
          </h1>

          <p>
            TaksinBurada mobil uygulaması ile bulunduğunuz konuma saniyeler
            içinde araç çağırabilir, sürücü bilgilerini görüntüleyebilir ve
            yolculuğunuzu anlık olarak takip edebilirsiniz.
          </p>

          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            Android Kullanıcıları
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            IOS Kullanıcıları
            <span>
              <FaAppStoreIos className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
        </div>

        {/* third col section */}
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            İLETİŞİM
          </h1>

          <div className="flex items-center gap-4">
            <FaMapMarker />
            İstanbul, Türkiye
          </div>

          <div className="flex items-center gap-4">
            <MdCall />
            +90 212 534 27 81
          </div>

          <div className="flex items-center gap-4">
            <MdEmail />
            info@taksinburada.com
          </div>

          <div className="flex items-center gap-4">
            <FaMousePointer />
            www.taksinburada.com
          </div>
        </div>
      </div>

      <p className="text-center py-4 text-sm">
        Copyright © {new Date().getFullYear()} TaksinBurada. Tüm hakları
        saklıdır. Developed by{" "}
        <a
          href="https://bekirsaglam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary cursor-pointer hover:underline"
        >
          BEKİR SAĞLAM
        </a>
      </p>
    </div>
  );
};

export default Footer;
