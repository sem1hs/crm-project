import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import clsx from "clsx";
import { meetingFormItems } from "@/lib/consts/meetingFormItems";
import useCreateMeeting from "@/hooks/useCreateMeeting";
import useGetAllUsers from "@/hooks/useGetAllUsers";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    customername: "",
    projectname: "",
    meetingDate: "",
    startTime: "",
    endTime: "",
  });
  const { data: users } = useGetAllUsers();
  const { isLoading, createMeeting, data } = useCreateMeeting();
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    if (users.data) {
      const filteredUser = users.data.filter(
        (user) => user.role === "employee",
      );
      setFilteredEmployees(filteredUser);
    }
  }, [users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMeeting(formData);
    if (data.length !== 0) {
      setFormData({});
      alert("Toplantı Başarıyla Eklendi !");
    } else {
      alert("Toplantı Eklenemedi, Lütfen Tekrar Deneyiniz");
    }
  };
  const handleSelect = (e) => {
    if (employees.find((employee) => employee === e.target.value)) {
      setEmployees((employee) => employee !== e.target.value);
    } else {
      setEmployees((employee) => [...employee, e.target.value]);
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
          {meetingFormItems.map((val, i) => (
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
          <div className="grid grid-cols-2 items-center gap-4">
            <label
              className="text-xl leading-tight text-white flex flex-row gap-4"
              htmlFor="select "
            >
              Katılımcılar :
              {employees?.map((user, i) => (
                <span key={i}>{user}</span>
              ))}
            </label>
            <select
              id="select"
              className="focus:outline-0 !bg-gray-100 border-none px-4 py-2 rounded-md"
              onChange={handleSelect}
            >
              <option disabled></option>
              {filteredEmployees.map((employee, i) => (
                <option key={i} value={employee.username}>
                  {employee.username}
                </option>
              ))}
            </select>
          </div>
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
