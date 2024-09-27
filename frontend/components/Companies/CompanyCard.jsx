import React, { memo } from "react";

const CompanyCard = ({ info }) => {
  return (
    <li className="px-6 py-8 bg-gray-500 rounded-lg flex flex-col gap-2">
      <h3 className="font-semibold text-white">Şirket : {info.name}</h3>
      <p className="text-white font-light text-base">Adres : {info.adress}</p>
      <span className="text-gray-200 font-light">Telefon : {info.phone}</span>
    </li>
  );
};

export default memo(CompanyCard);
