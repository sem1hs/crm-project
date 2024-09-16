import React from "react";
import clsx from "clsx";
import Link from "next/link";

const AsideSubLink = ({ info, isOpen }) => {
  return (
    <li
      className={clsx(
        "p-4 hover:bg-[#222] hover:bg-opacity-20 text-white rounded-full",
      )}
    >
      <Link href={info.href}>
        <h3 className="font-semibold lg:text-base">{info.title}</h3>
      </Link>
    </li>
  );
};

export default AsideSubLink;
