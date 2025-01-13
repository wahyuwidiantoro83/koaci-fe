"use client";
import Image from "next/image";
import bgGrow from "@/images/bg_grow.png";
import growLogo from "@/images/grow_logo.png";
import growOne from "@/images/grow_1.png";
import growTwo from "@/images/grow_2.png";
import growThree from "@/images/grow_3.png";
import smallLogo from "@/images/logo_simple.png";
import Layout from "@/components/layout";
import Link from "next/link";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Grow = (props) => {
  const [formData, setFormData] = useState({
    Nama: "",
    Email: "",
    Telepon: "",
    Medsos: "",
    Alasan: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const submitFormGrow = () => {
    let data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    fetch(
      "https://script.google.com/macros/s/AKfycbzonTRyei0VCSQCIfnCZ5am2nDEtL0BioXLsqgK3_UePEmzR6gv_KyxtRxpx4SCAD8S/exec",
      {
        method: "POST",
        body: data,
        mode: "no-cors",
      }
    ).then((response) => {
      if (response.status < 400) {
        setIsOpen(true);
      }
    });
  };

  return (
    <>
      <Layout>
        <div className="flex items-center w-full h-full overflow-hidden relative">
          <Image
            src={bgGrow}
            alt="Background Grow"
            className="w-full h-full object-fill absolute top-0 left-0 z-10"
          />
          <div className="flex flex-col-reverse md:flex-row w-full px-4 md:px-24 z-20 gap-8">
            <div className="flex flex-col items-center md:items-start w-full md:w-[50%] gap-4 z-20 text-white">
              <h1 className="text-2xl md:text-4xl font-medium text-center md:text-start">
                Mari Bertumbuh Membangun Jaringan Bersama Kami
              </h1>
              <p className="font-light mb-4 text-center md:text-start">
                Mulailah langkah awal kalian dalam mempelajari keuangan syariah secara mendalam, dan
                bangun jaringan kalian dari sekarang
              </p>
              <Link
                className="px-6 py-2 rounded-lg w-fit bg-[#1F98DB] text-white hover:bg-[#1f99dbe8] text-sm"
                href={"#grow-section"}
                scroll={true}
              >
                Bergabung
              </Link>
            </div>
            <div className="flex w-full md:w-[50%] relative">
              <Image
                src={growLogo}
                alt="Grow Logo"
                className="w-full object-contain z-20 md:absolute -top-20 left-0"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col px-4 md:px-24 py-16 gap-4 w-full items-center">
            <span className="bg-[#1F98DB] text-white px-10 py-2 rounded-full">Grow With Koaci</span>
            <p className="text-2xl text-center w-full mb-8 md:mb-20 font-normal">
              Grow With Koaci adalah platform edukasi dan kolaborasi <br /> untuk investasi dan
              bisnis syariah.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-16">
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

        <div id="grow-section" className="flex w-full relative overflow-hidden">
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
          <div className="flex w-full flex-col items-center px-4 md:px-24 py-16">
            <h2 className="text-2xl md:text-4xl mb-8 md:mb-24 text-center font-normal">
              Daftar Grow With Koaci Sekarang
            </h2>
            <div className="flex flex-col gap-2 md:gap-4 w-full md:w-[50%]">
              <div className="flex flex-col gap-1">
                <label className="text-xl md:text-2xl font-light" htmlFor="nama_lengkap">
                  Nama Lengkap
                </label>
                <input
                  className="px-6 py-3 border border-gray-400 rounded-lg outline-gray-400"
                  type="text"
                  id="nama_lengkap"
                  placeholder="Masukkan Nama Lengkap"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, Nama: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xl md:text-2xl font-light" htmlFor="email">
                  Email
                </label>
                <input
                  className="px-6 py-3 border border-gray-400 rounded-lg outline-gray-400"
                  type="email"
                  id="email"
                  placeholder="Masukkan Email"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, Email: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xl md:text-2xl font-light" htmlFor="nomor_telpon">
                  Nomor Telpon
                </label>
                <input
                  className="px-6 py-3 border border-gray-400 rounded-lg outline-gray-400"
                  type="text"
                  id="nomor_telpon"
                  placeholder="Masukkan Nomor Telpon"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, Telepon: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xl md:text-2xl font-light" htmlFor="sosial_media">
                  Akun Media Sosial (LinkedIn/Instagram/Facebook)
                </label>
                <input
                  className="px-6 py-3 border border-gray-400 rounded-lg outline-gray-400"
                  type="text"
                  id="sosial_media"
                  placeholder="Masukkan Akun Media Sosial"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, Medsos: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xl md:text-2xl font-light" htmlFor="alasan">
                  Alasan Bergabung Grow With Koaci
                </label>
                <textarea
                  className="px-6 py-3 border border-gray-400 rounded-lg outline-gray-400"
                  rows={5}
                  id="alasan"
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, Alasan: e.target.value };
                    });
                  }}
                ></textarea>
              </div>
              <button
                className="w-full bg-[#1E74D7] hover:bg-[#1e74d7e5] text-white text-xl font-medium py-4 rounded-lg"
                onClick={() => {
                  submitFormGrow();
                }}
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className=""></AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-2xl md:text-3xl font-normal text-center text-gray-800">
                  Anda Telah Berhasil Mendaftar!
                </h2>
                <p className="text-base text-center font-light">
                  Data anda telah tersimpan pada database kami, selanjutnya kami akan menghubungi
                  anda melalui email atau nomor handphone yang tertera.
                </p>
                <button
                  className="px-6 py-2 rounded-lg w-fit bg-[#1F98DB] text-white hover:bg-[#1f99dbe8] text-sm"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  OK
                </button>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Grow;
