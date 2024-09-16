import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-between">
      <div className="mx-auto px-8 py-20">
        <h1 className="text-primaryBg font-extrabold text-5xl">
          Ketcap Creative
        </h1>
        <p className="text-3xl leading-tight text-gray-500 mt-4 max-w-5xl">
          İşinizi büyütmek ve müşteri ilişkilerinizi güçlendirmek için en doğru
          yerdesiniz. CRM platformumuz, müşterilerinizle olan etkileşimlerinizi
          daha verimli hale getirir, ekibinizin potansiyelini en üst düzeye
          çıkarır ve iş hedeflerinize ulaşmanızda size rehberlik eder. Tüm
          müşteri verileriniz tek bir yerde, ulaşılması kolay, yönetilmesi basit
        </p>
      </div>
    </section>
  );
};

export default Hero;
