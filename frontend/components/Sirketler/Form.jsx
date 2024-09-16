import React, { useState } from "react";
import { companyFormItems } from "@/lib/consts/companyFormItems";
import createCompany from "@/hooks/useCreateCompany";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    phone: "",
    taxNo: 0,
    taxOffice: "",
  });

  let status = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    status = createCompany(formData);
  };
  return (
    <form
      className="px-8 py-12 bg-primaryBg rounded-xl mt-8 max-w-2xl mx-auto flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      {companyFormItems.map((val, i) => (
        <div className="grid grid-cols-2 items-center gap-4" key={i}>
          <label className="text-xl leading-tight text-white" htmlFor={val.id}>
            {val.title} :
          </label>
          <input
            className="focus:outline-0 !bg-gray-100 border-none px-1 py-1.5 rounded-md"
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
      <button className="bg-gray-100 px-1 py-1.5 rounded-md">Onayla</button>
    </form>
  );
};

export default Form;
