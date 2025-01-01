"use client";

import Image from "next/image";
import logo from "@/images/koaci_slogan.png";
import logoBlack from "@/images/koaci_slogan_black.png";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ scrolling }) => {
  const router = useRouter();
  const urlPath = usePathname();

  return (
    <nav
      className={`flex w-full justify-between py-[37px] px-4 md:px-24 h-20 fixed top-0 left-0 z-50 ${
        scrolling ? "bg-white text-gray-700 shadow-md" : "text-gray-200"
      } transition-all duration-200`}
    >
      <div className="flex items-center gap-12">
        <Image
          src={scrolling ? logoBlack : logo}
          className="transition-all duration-200"
          alt="Koaci"
          width={120}
        />
        <div className="hidden md:flex gap-10 text-base">
          <div
            className="flex flex-col group overflow-hidden relative cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <span
              className={`tracking-wide ${
                urlPath === "/" ? `font-semibold ${scrolling ? "text-black" : "text-white"}` : ""
              } ${scrolling ? `group-hover:text-black` : `group-hover:text-white`}`}
            >
              Pendanaan
            </span>
          </div>
          <div
            className="flex flex-col group overflow-hidden relative cursor-pointer"
            onClick={() => {
              router.push("/project");
            }}
          >
            <span
              className={`tracking-wide ${
                urlPath === "/project"
                  ? `font-semibold ${scrolling ? "text-black" : "text-white"}`
                  : ""
              } ${scrolling ? `group-hover:text-black` : `group-hover:text-white`}`}
            >
              Proyek
            </span>
          </div>
          <div
            className="flex flex-col group overflow-hidden relative cursor-pointer"
            onClick={() => {
              router.push("/faq");
            }}
          >
            <span
              className={`tracking-wide ${
                urlPath === "/faq" ? `font-semibold ${scrolling ? "text-black" : "text-white"}` : ""
              } ${scrolling ? `group-hover:text-black` : `group-hover:text-white`}`}
            >
              F.A.Q
            </span>
          </div>
          <div
            className="flex flex-col group overflow-hidden relative cursor-pointer"
            onClick={() => {
              router.push("/about-us");
            }}
          >
            <span
              className={`tracking-wide ${
                urlPath === "/about-us"
                  ? `font-semibold ${scrolling ? "text-black" : "text-white"}`
                  : ""
              } ${scrolling ? `group-hover:text-black` : `group-hover:text-white`}`}
            >
              Tentang Kami
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Button className="bg-green-400 text-white hover:bg-green-500 hover:text-white">
          Daftar Sekarang
        </Button>
        <Button
          variant="outline"
          className={`bg-transparent ${
            scrolling ? "border border-black text-black" : "text-white"
          }`}
        >
          <RiWhatsappLine /> Hubungi Kami
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
