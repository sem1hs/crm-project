import React, { useState } from "react";
import { companyFormItems } from "@/lib/consts/companyFormItems";
import UseCreateCompany from "@/hooks/useCreateCompany";
import Loader from "@/components/Loader/Loader";
import clsx from "clsx";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    phone: "",
    taxNo: 0,
    taxOffice: "",
  });
  const { isLoading, createCompany, data } = UseCreateCompany();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCompany(formData);
    if (data.length !== 0) {
      setFormData({});
      alert("Şirket Başarıyla Eklendi !");
    } else {
      alert("Şirket Eklenemedi, Lütfen Tekrar Deneyiniz");
    }
  };
  return (
    <form
      className={clsx(
        "px-8 py-12 bg-secondaryBg rounded-xl mt-8 max-w-2xl flex gap-8 min-w-full min-h-[492px]",
        {
          "flex-col": !isLoading,
        },
      )}
      onSubmit={handleSubmit}
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {companyFormItems.map((val, i) => (
            <div className="grid grid-cols-2 items-center gap-4" key={i}>
              <label
                className="text-xl leading-tight text-white"
                htmlFor={val.id}
              >
                {val.title} :
              </label>
              <input
                className="focus:outline-0 !bg-gray-100 border-none px-4 py-2 rounded-md"
                type={val.type}
                id={val.id}
                value={formData[val.id]}
                onChange={(e) =>
                  setFormData({ ...formData, [val.id]: e.target.value })
                }
                required
              />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gray-100 px-1 py-1.5 rounded-md col-start-2">
              Onayla
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
