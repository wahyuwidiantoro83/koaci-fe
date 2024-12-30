import Image from "next/image";
import logo from "@/images/koaci_slogan.png";
import logoBlack from "@/images/koaci_slogan_black.png";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "react-icons/ri";

const Navbar = ({ scrolling }) => {
  return (
    <nav
      className={`flex w-full justify-between py-[37px] px-4 md:px-24 h-20 fixed top-0 left-0 z-50 ${
        scrolling ? "bg-white text-gray-700 shadow-md" : "text-gray-200 bg-transparent"
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
          <div className="flex flex-col group overflow-hidden relative cursor-pointer">
            <span className="font-semibold">Pendanaan</span>
            <div
              className={`absolute -left-full bottom-0 group-hover:left-0 ${
                scrolling ? "bg-black" : "bg-white"
              } w-full h-0.5 transition-all duration-200`}
            ></div>
          </div>
          <div className="flex flex-col group overflow-hidden relative cursor-pointer">
            <span
              className={` ${
                scrolling ? `group-hover:text-black` : `group-hover:text-white`
              } transition-all duration-200`}
            >
              Proyek
            </span>
            <div
              className={`absolute -left-full bottom-0 group-hover:left-0 ${
                scrolling ? "bg-black" : "bg-white"
              } w-full h-0.5 transition-all duration-200`}
            ></div>
          </div>
          <div className="flex flex-col group overflow-hidden relative cursor-pointer">
            <span className="">F.A.Q</span>
            <div
              className={`absolute -left-full bottom-0 group-hover:left-0 ${
                scrolling ? "bg-black" : "bg-white"
              } w-full h-0.5 transition-all duration-200`}
            ></div>
          </div>
          <div className="flex flex-col group overflow-hidden relative cursor-pointer">
            <span className="">Tentang Kami</span>
            <div
              className={`absolute -left-full bottom-0 group-hover:left-0 ${
                scrolling ? "bg-black" : "bg-white"
              } w-full h-0.5 transition-all duration-200`}
            ></div>
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
