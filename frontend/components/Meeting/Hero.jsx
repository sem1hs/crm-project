import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-between">
      <div className="mx-auto px-8 py-20">
        <h1 className="text-primaryBg font-extrabold text-5xl">Toplantılar</h1>
        <p className="text-3xl leading-tight text-gray-500 mt-4 max-w-5xl">
          Toplantılar bölümü, tüm ekibinizin ve müşterilerinizin katıldığı
          toplantıları planlayıp takip etmenizi sağlar. Yaklaşan görüşmeleri,
          toplantı detaylarını ve katılımcıları kolayca görüntüleyin.
          İşbirliğini güçlendirmek ve zaman yönetimini optimize etmek için
          toplantılarınızı düzenli bir şekilde organize edin.
        </p>
      </div>
    </section>
  );
};

export default Hero;
