const Contact = () => {
  return (
    <div className="bg-primary text-black sm:min-h-150 sm:grid sm:place-items-center duration-100 pt-24  pb-10 sm:pb-0 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* sol taraf*/}
          <div data-aos="fade-up" className="space-y-5 sm:p-16 pb-6">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold">
              Şehrin En İyisi
            </h1>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              İstanbul’un Güvenilir Taksi Hizmeti
            </h1>

            <p data-aos="fade-up" className="leading-8 tracking-wide">
              İstanbul’un her noktasına güvenli ve hızlı ulaşım hizmeti
              sunuyoruz. Deneyimli şoförlerimiz ile konforlu bir yolculuk
              yaşayabilirsiniz. Günün her saati kolayca taksi çağırabilir,
              dakikalar içinde bulunduğunuz konuma araç yönlendirebilirsiniz.
            </p>
            <button
              data-aos="fade-up"
              data-aos-offset="0"
              className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Hemen Çağır
            </button>
          </div>
          {/* sağ form taraf*/}
          <div data-aos="fade-up" className="w-full">
            <div className="w-full md:max-w-87.5 mx-auto">
              <h1 className="uppercase text-2xl text-white bg-black px-5 py-3">
                TAKSİ REZERVASYONU YAP
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5">
                <input
                  className="inputField w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Adın"
                />
                <input
                  className="inputField w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Telefon"
                />
                <input
                  className="inputField w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Başlangıç"
                />

                <input
                  className="inputField w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Varış"
                />

                <select className="sm:col-span-2 inputField w-full" defaultValue="">
                  <option value="" disabled>
                    Araç Seçin
                  </option>

                  <option value="ekonomi">Ekonomi Sınıfı - 10₺/km</option>

                  <option value="standart">Standart Sınıf - 19₺/km</option>

                  <option value="business">Business Sınıfı - 30₺/km</option>
                </select>

                <button className="sm:col-span-2 bg-black cursor-pointer w-full  mt-6  text-white py-2 px-4 rounded-lg">
                  Rezervasyon Yap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;