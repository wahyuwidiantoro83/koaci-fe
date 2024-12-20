import Image from "next/image";
import logo from "@/images/koaci_slogan.png";
import logoBlack from "@/images/koaci_slogan_black.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "react-icons/ri";

const Navbar = ({ scrolling }) => {
  return (
    <nav
      className={`flex w-full justify-between py-[37px] px-4 md:px-24 h-20 fixed top-0 left-0 z-50 ${
        scrolling
          ? "bg-white text-black transition-all duration-200 shadow-md"
          : "text-white transition-all duration-200"
      }`}
    >
      <div className="flex items-center gap-10">
        <Image
          src={scrolling ? logoBlack : logo}
          className="transition-all duration-200"
          alt="Koaci"
          width={120}
        />
        <div className="hidden md:flex gap-8 text-base">
          <span>Pendanaan</span>
          <span>Proyek</span>
          <span>F.A.Q</span>
          <span>Tentang Kami</span>
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
