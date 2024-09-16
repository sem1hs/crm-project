import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-between">
      <div className="mx-auto px-8 py-20">
        <h1 className="text-primaryBg font-extrabold text-5xl">Şirketler</h1>
        <p className="text-3xl leading-tight text-gray-500 mt-4 max-w-5xl">
          CRM platformumuz, küçük işletmelerden büyük ölçekli şirketlere kadar
          her büyüklükteki işletmeye hitap eder. Şirketlerin müşteri
          ilişkilerini daha etkili yönetmelerine, satış süreçlerini optimize
          etmelerine ve müşteri memnuniyetini artırmalarına yardımcı olur.
          İşinizin ihtiyaçlarına göre özelleştirilebilen esnek yapısıyla, her
          sektöre uyum sağlar.
        </p>
      </div>
    </section>
  );
};

export default Hero;
