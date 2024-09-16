import { FaProjectDiagram } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { IoBusinessSharp } from "react-icons/io5";

export const asideLinks = [
  {
    index: "sirketler",
    title: "Şirketler",
    href: "/sirketler",
    icon: <IoBusinessSharp />,
    sublinks: [
      {
        title: "Şirket Ekle",
        href: "/sirketler/sirket-ekle",
      },
      {
        title: "Şirket Listele",
        href: "/sirketler/sirket-listele",
      },
    ],
  },
  {
    index: "projeler",
    title: "Projeler",
    href: "/projeler",
    icon: <FaProjectDiagram />,
    sublinks: [
      {
        title: "Proje Ekle",
        href: "/projeler/proje-ekle",
      },
      {
        title: "Proje Listele",
        href: "/projeler/proje-listele",
      },
    ],
  },
  {
    index: "toplantilar",
    title: "Toplantılar",
    href: "/toplantilar",
    icon: <SiGooglemeet />,
    sublinks: [
      {
        title: "Toplantı Ekle",
        href: "/toplantilar/toplanti-ekle",
      },
      {
        title: "Toplantı Listele",
        href: "/toplantilar/toplanti-listele",
      },
    ],
  },
  {
    title: "Şirketler",
    href: "/",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Şirketler",
    href: "/",
    icon: <FaProjectDiagram />,
  },
];
