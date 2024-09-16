"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import clsx from "clsx";
import AsideSubLink from "@/components/Aside/AsideSubLink";
import { usePathname } from "next/navigation";

const AsideLink = ({ val }) => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (path.split("/").includes(val.index)) {
      setIsOpen(true);
    } else setIsOpen(false);
  }, [path, val.index]);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <li
      className={clsx(
        "p-4 hover:bg-[#222] hover:bg-opacity-20 text-white opacity-70 hover:opacity-100 focus:opacity-100 transition-all rounded-3xl cursor-pointer max-h-[60px] overflow-hidden",
        {
          "bg-[#222] bg-opacity-20 !max-h-max": isOpen,
        },
      )}
    >
      <Link href={val.href} className="flex items-center gap-2">
        <i>{val.icon}</i>
        <h3 className="font-semibold lg:text-base">{val.title}</h3>
        <i className="ml-auto text-white">
          <SlArrowRight
            onClick={handleClick}
            className={clsx("transition-all rotate-0", {
              "!rotate-90": isOpen,
            })}
          />
        </i>
      </Link>
      <ul
        className={clsx(
          "flex flex-col gap-1 mt-2 invisible opacity-0 translate-y-[-26px] transition-all",
          { "!visible !opacity-100 !translate-y-0": isOpen },
        )}
      >
        {val.sublinks?.map((val, i) => (
          <AsideSubLink info={val} key={i} />
        ))}
      </ul>
    </li>
  );
};

export default AsideLink;
