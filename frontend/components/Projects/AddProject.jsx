"use client";
import React from "react";
import Form from "@/components/Projects/Form";

const AddProject = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-2xl mx-auto px-16 py-18">
        <h1 className="text-primaryBg font-extrabold text-5xl">Proje Ekle</h1>
        <p className="text-xl leading-tight text-gray-500 mt-8 max-w-5xl">
          Yeni bir proje eklemek, iş süreçlerinizi organize etmenin ilk
          adımıdır. Bu bölümde, projelerinizi kolayca oluşturabilir, görevleri
          belirleyebilir ve ekip üyelerinize sorumluluklar atayabilirsiniz.
          Hedeflerinize ulaşmanıza yardımcı olacak bu basit adımla,
          projelerinizi daha verimli bir şekilde yönetin ve başarıya odaklanın
        </p>

        <Form />
      </div>
    </section>
  );
};

export default AddProject;
