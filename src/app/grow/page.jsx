"use client";
import Image from "next/image";
import bgGrow from "@/images/bg_grow.png";
import growLogo from "@/images/grow_logo.png";
import logoBlack from "@/images/koaci_slogan_black.png";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "react-icons/ri";
import growOne from "@/images/grow_1.png";
import growTwo from "@/images/grow_2.png";
import growThree from "@/images/grow_3.png";
import Footer from "@/components/footer";
import smallLogo from "@/images/logo_simple.png";

const Grow = (props) => {
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
        <div className="flex items-center w-full h-full overflow-hidden relative">
          <Image
            src={bgGrow}
            alt="Background Grow"
            className="w-full h-full object-cover absolute top-0 left-0 z-10"
          />
          <div className="flex w-full py-[37px] px-4 md:px-24 z-20">
            <div className="flex flex-col w-[50%] gap-4 z-20 text-white">
              <h1 className="text-4xl font-medium">
                Mari Bertumbuh Membangun Jaringan Bersama Kami
              </h1>
              <p className="font-light mb-4">
                Mulailah langkah awal kalian dalam mempelajari keuangan syariah secara mendalam, dan
                bangun jaringan kalian dari sekarang
              </p>
              <button className="px-6 py-2 rounded-lg w-fit bg-[#1F98DB] text-white hover:bg-[#1f99dbe8] text-sm">
                Bergabung
              </button>
            </div>
            <div className="flex w-[50%] relative">
              <Image
                src={growLogo}
                alt="Grow Logo"
                className="w-full object-contain z-20 absolute -top-20 left-0"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full px-24 py-16">
          <div className="flex flex-col gap-4 w-full items-center">
            <span className="bg-[#1F98DB] text-white px-10 py-2 rounded-full">Grow With Koaci</span>
            <p className="text-2xl text-center w-[50%] mb-20">
              Grow With Koaci adalah platform edukasi dan kolaborasi untuk investasi dan bisnis
              syariah.
            </p>
            <div className="flex justify-center w-full gap-16">
              <div className="flex w-full max-w-72 h-[26rem] relative overflow-hidden rounded-lg">
                <Image
                  src={growOne}
                  alt="Grow One"
                  className="w-full object-cover absolute bottom-0 left-0"
                />
                <div className="flex flex-col gap-4 p-4 w-full rounded-md z-20 text-white">
                  <div className="flex gap-4 items-center">
                    <span className="flex w-8 h-8 rounded-full justify-center items-center bg-white">
                      <span className="w-2 h-2 rounded-full bg-[#818181]"></span>
                    </span>
                    <span className="text-xs">Media belajar keuangan</span>
                  </div>
                  <p className="font-light">
                    Grow With Koaci merupakan tempat belajar keuangan syariah secara mendalam.
                  </p>
                </div>
              </div>
              <div className="flex w-full max-w-72 h-[26rem] relative overflow-hidden rounded-lg">
                <Image
                  src={growTwo}
                  alt="Grow Two"
                  className="w-full object-cover absolute top-0 left-0"
                />
                <div className="flex flex-col gap-4 p-4 w-full rounded-md z-20 text-white">
                  <div className="flex gap-4 items-center">
                    <span className="flex w-8 h-8 rounded-full justify-center items-center bg-white">
                      <span className="w-2 h-2 rounded-full bg-[#818181]"></span>
                    </span>
                    <span className="text-xs">Berinovatif bersama</span>
                  </div>
                  <p className="font-light">
                    Grow With Koaci merupakan wadah untuk berbagi ide dan berdiskusi.
                  </p>
                </div>
              </div>
              <div className="flex w-full max-w-72 h-[26rem] relative overflow-hidden rounded-lg">
                <Image
                  src={growThree}
                  alt="Grow Three"
                  className="w-full object-cover absolute top-0 left-0"
                />
                <div className="flex flex-col gap-4 p-4 w-full rounded-md z-20 text-white">
                  <div className="flex gap-4 items-center">
                    <span className="flex w-8 h-8 rounded-full justify-center items-center bg-white">
                      <span className="w-2 h-2 rounded-full bg-[#818181]"></span>
                    </span>
                    <span className="text-xs">Media Belajar Keuangan</span>
                  </div>
                  <p className="font-light">
                    Grow With Koaci merupakan tempat membangun jaringan dengan pebisnis dan
                    investor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full relative overflow-hidden">
          <Image
            src={smallLogo}
            alt="ornament"
            className="w-[31rem]  object-contain absolute top-0 -right-64"
          />
          <Image
            src={smallLogo}
            alt="ornament"
            className="w-[31rem]  object-contain absolute bottom-0 -left-64"
          />
          <div className="flex w-full flex-col items-center px-24 py-16">
            <h2 className="text-4xl mb-24">Daftar Grow With Koaci Sekarang</h2>
            <div className="flex flex-col gap-4 w-[50%]">
              <div className="flex flex-col gap-1">
                <label className="text-2xl font-light" htmlFor="nama_lengkap">
                  Nama Lengkap
                </label>
                <input
                  className="px-6 py-3 border border-gray-500 rounded-lg"
                  type="text"
                  id="nama_lengkap"
                  placeholder="Masukkan Nama Lengkap"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-2xl font-light" htmlFor="email">
                  Email
                </label>
                <input
                  className="px-6 py-3 border border-gray-500 rounded-lg"
                  type="email"
                  id="email"
                  placeholder="Masukkan Email"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-2xl font-light" htmlFor="nomor_telpon">
                  Nomor Telpon
                </label>
                <input
                  className="px-6 py-3 border border-gray-500 rounded-lg"
                  type="text"
                  id="nomor_telpon"
                  placeholder="Masukkan Nomor Telpon"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-2xl font-light" htmlFor="sosial_media">
                  Akun Media Sosial (LinkedIn/Instagram/Facebook)
                </label>
                <input
                  className="px-6 py-3 border border-gray-500 rounded-lg"
                  type="text"
                  id="sosial_media"
                  placeholder="Masukkan Akun Media Sosial"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-2xl font-light" htmlFor="alasan">
                  Alasan Bergabung Grow With Koaci
                </label>
                <textarea
                  className="px-6 py-3 border border-gray-500 rounded-lg"
                  rows={5}
                  id="alasan"
                ></textarea>
              </div>
              <button className="w-full bg-[#1E74D7] hover:bg-[#1e74d7e5] text-white text-xl font-medium py-4 rounded-lg">
                Daftar
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Grow;
