"use client";
import React from "react";
import Form from "@/components/Meeting/Form";

const AddProject = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-2xl mx-auto px-16 py-18">
        <h1 className="text-primaryBg font-extrabold text-5xl">
          Toplantı Ekle
        </h1>
        <p className="text-xl leading-tight text-gray-500 mt-8 max-w-5xl">
          Toplantı ekleme bölümü, iş süreçlerinizi ve iletişiminizi organize
          etmenin en hızlı yoludur. Yeni bir toplantı oluştururken tarih, saat
          ve katılımcıları belirleyerek ekibinizle veya müşterilerinizle kolayca
          planlama yapabilirsiniz. İşlerinizi daha verimli yönetmek ve zamanı
          etkili kullanmak için toplantılarınızı hızlıca ekleyin
        </p>

        <Form />
      </div>
    </section>
  );
};

export default AddProject;
