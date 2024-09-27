import React, { memo } from "react";
import { formatDate } from "@/lib/formatDate";

const ProjectCard = ({ info }) => {
  return (
    <li className="px-6 py-8 bg-secondaryBg rounded-lg flex flex-col gap-2">
      <h3 className="font-semibold text-white">Proje : {info.name}</h3>
      <p className="text-white font-light text-base">
        Başlangıç Tarihi : {formatDate(info.startDate)}
      </p>
      <p className="text-white font-light text-base">
        Bitiş Tarihi : {formatDate(info.endDate)}
      </p>
      <span className="text-gray-200 font-light">
        Müşteri : {info.username}
      </span>
    </li>
  );
};

export default memo(ProjectCard);
