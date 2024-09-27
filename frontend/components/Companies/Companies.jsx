"use client";
import CompanyCard from "@/components/Companies/CompanyCard";
import Loader from "@/components/Loader/Loader";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";

const Companies = () => {
  const { data: companies, isLoading } = useGetAllCompanies();

  return (
    <section className="py-20">
      <div className="max-w-screen-2xl mx-auto px-16 py-18">
        <h1 className="text-primaryBg font-extrabold text-5xl">
          Çalıştığımız Şirketler
        </h1>
        <p className="text-xl leading-tight text-gray-500 mt-8 max-w-5xl">
          Birlikte çalıştığımız şirketler, sektördeki en iyilerden oluşan geniş
          bir portföy sunar. Her biri, bizimle olan işbirlikleri sayesinde
          müşteri ilişkilerini güçlendirmiş, verimliliğini artırmış ve iş
          süreçlerini optimize etmiştir. Başarıları bizim için bir ilham
          kaynağıdır ve onlarla olan güçlü ilişkilerimiz, hizmet kalitemizi
          sürekli olarak geliştirmenin bir göstergesidir.
        </p>

        <ul className="mt-12 grid grid-cols-3 gap-4">
          {isLoading && <Loader />}
          {!isLoading &&
            companies?.map((companie, i) => (
              <CompanyCard key={i} info={companie} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Companies;
