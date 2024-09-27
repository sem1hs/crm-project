import React, { useState } from "react";
import Loader from "@/components/Loader/Loader";
import clsx from "clsx";
import { projectFormItems } from "@/lib/consts/projectFormItems";
import useCreateProject from "@/hooks/useCreateProject";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    username: "",
  });
  const { isLoading, createProject, data } = useCreateProject();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProject(formData);
    if (data.length !== 0) {
      setFormData({});
      alert("Proje Başarıyla Eklendi !");
    } else {
      alert("Proje Eklenemedi, Lütfen Tekrar Deneyiniz");
    }
  };
  return (
    <form
      className={clsx(
        "px-8 py-12 bg-secondaryBg rounded-xl mt-8 max-w-2xl flex gap-8 min-w-full min-h-[424]",
        {
          "flex-col": !isLoading,
        },
      )}
      onSubmit={handleSubmit}
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {projectFormItems.map((val, i) => (
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
