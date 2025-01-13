"use client";

import registerImage from "@/images/register_image.png";
import logoKoaci from "@/images/koaci_slogan.png";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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

const Register = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Nama: "",
    Email: "",
    Nomor: "",
    Role: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const submitFormRegister = () => {
    let data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    fetch(
      "https://script.google.com/macros/s/AKfycby3uFO9_lA4dk79ve5G3OlcRTdgj59iyzorB2bGCVYbmhqDaTx3zjA-to3yTt3sApcw/exec",
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
      <div className="flex w-full min-h-svh">
        <div className="flex w-full md:w-[50%] flex-col px-4 md:px-24 py-10 bg-gradient-to-b from-[#1E74D7] from-[10%] to-[#1EE0B3] to-100%">
          <div
            className="flex items-center mb-8 md:mb-16 text-gray-100 cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <RiArrowLeftSLine className="w-8 h-8" />
            <p className="text-sm">Back to Home Page</p>
          </div>
          <div className="flex gap-4 items-center mb-6 md:mb-10">
            <p className="text-gray-100 text-2xl font-normal">Welcome to</p>
            <Image src={logoKoaci} alt="Logo Koaci" className="w-24" />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-2xl md:text-[2.75rem] md:leading-[3rem] font-normal">
              Mari bergabung menjadi bagian dari kami
            </p>
            <p className="text-base">
              Lakukan pendaftaran sebagai investor atau pengusaha dan dapatkan info lebih lanjut
              dari kami. Kami sangat menunggu anda untuk bergabung bersama kami.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Nama Lengkap Anda"
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Nama: e.target.value };
                  });
                }}
              />
              <input
                type="email"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Email Anda"
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Email: e.target.value };
                  });
                }}
              />
              <input
                type="text"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Nomor Handphone Anda"
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Nomor: e.target.value };
                  });
                }}
              />
              <select
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 text-gray-200"
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Role: e.target.value };
                  });
                }}
                defaultValue={""}
              >
                <option value="" disabled>
                  Pilih Role Anda
                </option>
                <option value="pebisnis" className="text-black">
                  Pebisnis
                </option>
                <option value="investor" className="text-black">
                  Investor
                </option>
              </select>
              <Button
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => {
                  submitFormRegister();
                  // router.push("/register/success");
                }}
              >
                Kirim
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-[50%]">
          <Image src={registerImage} alt="Register Image" className="w-full object-cover" />
        </div>
      </div>
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

export default Register;
