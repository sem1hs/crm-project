import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-between">
      <div className="mx-auto px-8 py-20">
        <h1 className="text-primaryBg font-extrabold text-5xl">Projeler</h1>
        <p className="text-3xl leading-tight text-gray-500 mt-4 max-w-5xl">
          Projeler bölümü, ekibinizin üzerinde çalıştığı tüm projeleri tek bir
          yerden takip etmenizi sağlar. Proje ilerlemelerini, teslim tarihlerini
          ve görev dağılımlarını kolayca görüntüleyerek iş süreçlerinizi daha
          düzenli hale getirin. Verimliliği artırmak ve projelerinizi zamanında
          tamamlamak için etkili bir çözüm sunuyoruz.
        </p>
      </div>
    </section>
  );
};

export default Hero;
