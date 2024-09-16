import React from "react";
import Form from "@/components/Sirketler/Form";

const SirketEkle = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-2xl mx-auto px-16 py-18">
        <h1 className="text-primaryBg font-extrabold text-5xl">Şirket Ekle</h1>
        <p className="text-xl leading-tight text-gray-500 mt-8 max-w-5xl">
          Yeni bir şirket eklemek, CRM platformumuzun sunduğu güçlü araçları ve
          verimliliği hemen keşfetmenin kolay bir yoludur. Bu basit ve hızlı
          işlemle, şirketinizin bilgilerini kaydedebilir, özelleştirilmiş
          çözümlerimizden yararlanabilir ve iş süreçlerinizi daha etkili bir
          şekilde yönetmeye başlayabilirsiniz. Ekibinizin ihtiyaçlarına uygun
          olarak hemen yapılandırın ve iş dünyasında bir adım önde olun
        </p>

        <Form />
      </div>
    </section>
  );
};

export default SirketEkle;
