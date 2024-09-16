import React from "react";
import AsideLink from "@/components/Aside/AsideLink";
import { asideLinks } from "@/lib/consts/asideLinks";
import Link from "next/link";

const Aside = () => {
  return (
    <aside className="bg-primaryBg min-w-[384px] h-screen rounded-r-[32px]">
      <div className="lg:px-6 lg:py-12">
        {/*İcon*/}
        <div className="py-6 border-b border-gray-300 border-opacity-50">
          <Link href="/">
            <h1 className="text-white font-extrabold text-3xl">
              Ketcap Creative
            </h1>
          </Link>
        </div>
        <div className="mt-6">
          <ul className="flex flex-col gap-1">
            {asideLinks.map((val, i) => (
              <AsideLink key={i} val={val} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
