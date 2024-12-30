"use client";
import Image from "next/image";
import logo from "@/images/koaci_slogan.png";
import logoBlack from "@/images/koaci_slogan_black.png";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "react-icons/ri";

const RegisterSuccess = (props) => {
  return (
    <>
      <div className="h-dvh w-dvw overflow-auto font-roboto">
        <nav
          className={`flex w-full justify-between py-[37px] px-4 md:px-24 h-20 fixed top-0 left-0 z-50 bg-white text-gray-700 shadow-md transition-all duration-200`}
        >
          <div className="flex items-center gap-12">
            <Image
              src={logoBlack}
              className="transition-all duration-200"
              alt="Koaci"
              width={120}
            />
            <div className="hidden md:flex gap-10 text-base">
              <div className="flex flex-col group overflow-hidden relative cursor-pointer">
                <span className="font-semibold">Pendanaan</span>
                <div
                  className={`absolute -left-full bottom-0 group-hover:left-0 bg-black" : "bg-white"
                  } w-full h-0.5 transition-all duration-200`}
                ></div>
              </div>
              <div className="flex flex-col group overflow-hidden relative cursor-pointer">
                <span className={`group-hover:text-black transition-all duration-200`}>Proyek</span>
                <div
                  className={`absolute -left-full bottom-0 group-hover:left-0 bg-black w-full h-0.5 transition-all duration-200`}
                ></div>
              </div>
              <div className="flex flex-col group overflow-hidden relative cursor-pointer">
                <span className="">F.A.Q</span>
                <div
                  className={`absolute -left-full bottom-0 group-hover:left-0 bg-black w-full h-0.5 transition-all duration-200`}
                ></div>
              </div>
              <div className="flex flex-col group overflow-hidden relative cursor-pointer">
                <span className="">Tentang Kami</span>
                <div
                  className={`absolute -left-full bottom-0 group-hover:left-0 bg-black w-full h-0.5 transition-all duration-200`}
                ></div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-[#1EE0B3] text-white hover:bg-green-500 hover:text-white">
              Daftar Sekarang
            </Button>
            <Button variant="outline" className={`bg-transparent border border-black text-black`}>
              <RiWhatsappLine /> Hubungi Kami
            </Button>
          </div>
        </nav>
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl mb-6">Anda Telah Berhasil Mendaftar</h1>
            <p className="mb-6 text-lg">
              Data anda telah tersimpan pada database kami, selanjutnya kami akan menghubungi anda
              melalui email atau nomor handphone yang tertera.
            </p>
            <button className="bg-[#1EE0B3] text-white text-xl hover:bg-green-500 hover:text-white p-2 rounded-lg w-96">
              Kembali Halaman Utama
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSuccess;
